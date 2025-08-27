import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';
import * as Joi from 'joi';

// Inicializar Firebase Admin
admin.initializeApp();

// Configurar CORS
const corsHandler = cors({ origin: true });

// Esquemas de validación
const contactFormSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).optional(),
  company: Joi.string().max(100).optional(),
  service: Joi.string().valid(
    'conferencias',
    'talleres',
    'mentoria-grupal',
    'mentoria-individual',
    'nexo-estrategico',
    'consulta-general'
  ).required(),
  message: Joi.string().min(10).max(1000).required(),
  acceptTerms: Joi.boolean().valid(true).required()
});

const newsletterSchema = Joi.object({
  email: Joi.string().email().required(),
  source: Joi.string().max(50).optional()
});

// Configuración del transportador de email
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: functions.config().email.user,
      pass: functions.config().email.password
    }
  });
};

// Función para procesar formularios de contacto
export const processContactForm = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      // Validar método HTTP
      if (req.method !== 'POST') {
        return res.status(405).json({ 
          success: false, 
          error: 'Método no permitido' 
        });
      }

      // Validar datos del formulario
      const { error, value } = contactFormSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          error: 'Datos inválidos',
          details: error.details.map(d => d.message)
        });
      }

      const { name, email, phone, company, service, message } = value;

      // Guardar en Firestore
      const contactData = {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        status: 'pending',
        source: 'website'
      };

      const docRef = await admin.firestore()
        .collection('contacts')
        .add(contactData);

      // Configurar emails
      const transporter = createTransporter();
      
      const serviceNames: { [key: string]: string } = {
        'conferencias': 'Conferencias - Despierta tu Genio Digital',
        'talleres': 'Talleres de Transformación Digital',
        'mentoria-grupal': 'Mentoría Grupal',
        'mentoria-individual': 'Mentoría Individual',
        'nexo-estrategico': 'Nexo Estratégico',
        'consulta-general': 'Consulta General'
      };

      // Email de notificación para Kamdata
      const adminEmailOptions = {
        from: functions.config().email.user,
        to: 'contacto@kamdata.com',
        subject: `Nuevo contacto: ${serviceNames[service]}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">Nuevo Contacto - Kamdata</h1>
            </div>
            <div style="padding: 20px; background: #f9f9f9;">
              <h2 style="color: #333;">Detalles del Contacto</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Nombre:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Empresa:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${company}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Servicio:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${serviceNames[service]}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; vertical-align: top;">Mensaje:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">ID de Contacto:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${docRef.id}</td>
                </tr>
              </table>
            </div>
            <div style="padding: 20px; text-align: center; color: #666;">
              <p>Este contacto fue enviado desde el sitio web de Kamdata.</p>
            </div>
          </div>
        `
      };

      // Email de confirmación para el cliente
      const clientEmailOptions = {
        from: functions.config().email.user,
        to: email,
        subject: 'Hemos recibido tu mensaje - Kamdata',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">¡Gracias por contactarnos!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Hola <strong>${name}</strong>,</p>
              <p>Hemos recibido tu mensaje sobre <strong>${serviceNames[service]}</strong> y nos pondremos en contacto contigo en las próximas 24 horas.</p>
              
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Resumen de tu consulta:</h3>
                <p><strong>Servicio de interés:</strong> ${serviceNames[service]}</p>
                <p><strong>Tu mensaje:</strong></p>
                <p style="font-style: italic;">${message}</p>
              </div>
              
              <p>Mientras tanto, te invitamos a:</p>
              <ul>
                <li>Conocer más sobre nuestro <a href="https://kamdata.com/metodo-dance" style="color: #667eea;">Método DANCE</a></li>
                <li>Leer nuestros últimos <a href="https://kamdata.com/blog" style="color: #667eea;">insights en el blog</a></li>
                <li>Seguirnos en nuestras redes sociales</li>
              </ul>
              
              <p>¡Esperamos poder ayudarte en tu transformación digital!</p>
              
              <p>Saludos cordiales,<br>
              <strong>El equipo de Kamdata</strong></p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
              <p style="margin: 0;">Kamdata - Expertos en Transformación Digital</p>
              <p style="margin: 5px 0 0 0;">contacto@kamdata.com | www.kamdata.com</p>
            </div>
          </div>
        `
      };

      // Enviar emails
      await Promise.all([
        transporter.sendMail(adminEmailOptions),
        transporter.sendMail(clientEmailOptions)
      ]);

      // Respuesta exitosa
      res.status(200).json({
        success: true,
        message: 'Mensaje enviado correctamente',
        contactId: docRef.id
      });

    } catch (error) {
      console.error('Error procesando formulario de contacto:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
      });
    }
  });
});

// Función para suscripción al newsletter
export const subscribeNewsletter = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      // Validar método HTTP
      if (req.method !== 'POST') {
        return res.status(405).json({ 
          success: false, 
          error: 'Método no permitido' 
        });
      }

      // Validar datos
      const { error, value } = newsletterSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          error: 'Email inválido',
          details: error.details.map(d => d.message)
        });
      }

      const { email, source } = value;

      // Verificar si ya está suscrito
      const existingSubscription = await admin.firestore()
        .collection('newsletter')
        .where('email', '==', email)
        .get();

      if (!existingSubscription.empty) {
        return res.status(409).json({
          success: false,
          error: 'Este email ya está suscrito al newsletter'
        });
      }

      // Guardar suscripción
      const subscriptionData = {
        email,
        source: source || 'website',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        status: 'active'
      };

      const docRef = await admin.firestore()
        .collection('newsletter')
        .add(subscriptionData);

      // Enviar email de bienvenida
      const transporter = createTransporter();
      
      const welcomeEmailOptions = {
        from: functions.config().email.user,
        to: email,
        subject: '¡Bienvenido al Newsletter de Kamdata!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">¡Bienvenido a Kamdata!</h1>
            </div>
            <div style="padding: 20px;">
              <p>¡Gracias por suscribirte a nuestro newsletter!</p>
              <p>Ahora recibirás los últimos insights sobre transformación digital, liderazgo e innovación directamente en tu bandeja de entrada.</p>
              
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">¿Qué puedes esperar?</h3>
                <ul style="margin: 0;">
                  <li>Artículos exclusivos sobre transformación digital</li>
                  <li>Casos de éxito y mejores prácticas</li>
                  <li>Invitaciones a webinars y eventos</li>
                  <li>Recursos gratuitos y herramientas</li>
                </ul>
              </div>
              
              <p>Mientras tanto, te invitamos a explorar:</p>
              <ul>
                <li><a href="https://kamdata.com/metodo-dance" style="color: #667eea;">Nuestro Método DANCE</a></li>
                <li><a href="https://kamdata.com/blog" style="color: #667eea;">Nuestro blog</a></li>
                <li><a href="https://kamdata.com/servicios" style="color: #667eea;">Nuestros servicios</a></li>
              </ul>
              
              <p>¡Esperamos acompañarte en tu journey de transformación digital!</p>
              
              <p>Saludos,<br>
              <strong>El equipo de Kamdata</strong></p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
              <p style="margin: 0;">Kamdata - Expertos en Transformación Digital</p>
              <p style="margin: 5px 0 0 0;">contacto@kamdata.com | www.kamdata.com</p>
              <p style="margin: 10px 0 0 0; font-size: 12px;">
                <a href="#" style="color: #666;">Cancelar suscripción</a>
              </p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(welcomeEmailOptions);

      // Respuesta exitosa
      res.status(200).json({
        success: true,
        message: 'Suscripción exitosa',
        subscriptionId: docRef.id
      });

    } catch (error) {
      console.error('Error procesando suscripción al newsletter:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
      });
    }
  });
});

// Función para obtener estadísticas (solo para administradores)
export const getContactStats = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      // Validar método HTTP
      if (req.method !== 'GET') {
        return res.status(405).json({ 
          success: false, 
          error: 'Método no permitido' 
        });
      }

      // En una implementación real, aquí validarías la autenticación del admin
      // const token = req.headers.authorization;
      // await admin.auth().verifyIdToken(token);

      // Obtener estadísticas de contactos
      const contactsSnapshot = await admin.firestore()
        .collection('contacts')
        .get();

      const newsletterSnapshot = await admin.firestore()
        .collection('newsletter')
        .get();

      // Agrupar por servicio
      const serviceStats: { [key: string]: number } = {};
      contactsSnapshot.docs.forEach(doc => {
        const service = doc.data().service;
        serviceStats[service] = (serviceStats[service] || 0) + 1;
      });

      // Estadísticas por mes (últimos 6 meses)
      const monthlyStats: { [key: string]: number } = {};
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      contactsSnapshot.docs.forEach(doc => {
        const timestamp = doc.data().timestamp?.toDate();
        if (timestamp && timestamp > sixMonthsAgo) {
          const monthKey = `${timestamp.getFullYear()}-${String(timestamp.getMonth() + 1).padStart(2, '0')}`;
          monthlyStats[monthKey] = (monthlyStats[monthKey] || 0) + 1;
        }
      });

      res.status(200).json({
        success: true,
        data: {
          totalContacts: contactsSnapshot.size,
          totalNewsletterSubscribers: newsletterSnapshot.size,
          serviceStats,
          monthlyStats
        }
      });

    } catch (error) {
      console.error('Error obteniendo estadísticas:', error);
      res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
      });
    }
  });
});