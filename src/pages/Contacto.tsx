import React, { useState } from 'react';
import { Layout } from '../components/Layout';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoServicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aquí iría la integración con Cloud Functions
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', tipoServicio: '', mensaje: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      pregunta: '¿En qué se diferencia Kamdata de un curso o consultoría?',
      respuesta: 'No somos consultores tradicionales ni un curso más. Somos habilitadores que te enseñamos a navegar el mundo de los datos con autonomía. Te damos la brújula y te enseñamos cómo usarla, no navegamos por ti.'
    },
    {
      pregunta: '¿Qué necesito para aplicar el Método DANCE?',
      respuesta: 'Solo necesitas disposición para aprender y aplicar. El Método DANCE está diseñado para ser práctico y aplicable sin importar tu nivel técnico actual. Nos adaptamos a tu realidad y recursos.'
    },
    {
      pregunta: '¿Puedo invitar a Kamdata a mi empresa?',
      respuesta: 'Absolutamente. Ofrecemos servicios presenciales, virtuales e híbridos. Podemos adaptar nuestros programas a las necesidades específicas de tu organización, desde conferencias hasta programas de mentoría grupal.'
    }
  ];

  return (
    <Layout
      title="Contacto - Agenda tu Diagnóstico Gratuito | Kamdata"
      description="Contáctanos para agendar tu diagnóstico gratuito. WhatsApp, email, teléfono. Te ayudamos a convertir tus datos en decisiones estratégicas."
      keywords="contacto kamdata, diagnostico gratuito, whatsapp business, mentoria datos, consulta"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary/10 to-kamdata-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hablemos de tu <span className="text-kamdata-primary">Transformación</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agenda tu diagnóstico gratuito y descubre cómo convertir tus datos en decisiones estratégicas
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Agenda tu Diagnóstico Gratuito</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="tipoServicio" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué tipo de servicio te interesa?
                </label>
                <select
                  id="tipoServicio"
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="conferencias">Conferencias</option>
                  <option value="talleres">Talleres</option>
                  <option value="mentoria-grupal">Mentoría Grupal</option>
                  <option value="mentoria-individual">Mentoría Individual</option>
                  <option value="nexo-estrategico">Nexo Estratégico</option>
                  <option value="no-seguro">No estoy seguro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu situación
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
                  placeholder="Describe brevemente tu situación actual con los datos y qué te gustaría lograr..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-kamdata-primary text-white font-semibold rounded-lg hover:bg-kamdata-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Contacto Directo */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contacto Directo</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-kamdata-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:informes@kamdata.com.mx" className="text-kamdata-primary hover:text-kamdata-secondary">
                      informes@kamdata.com.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-kamdata-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <a href="tel:+525661610375" className="text-kamdata-primary hover:text-kamdata-secondary">
                      +52 56 6161 0375
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/525661610375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors w-full justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h3>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.pregunta}</h4>
                    <p className="text-gray-600 text-sm">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Prefieres una conversación más directa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad en WhatsApp para recibir tips y estar al día con nuestros programas
          </p>
          <a
            href="https://wa.me/525661610375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-kamdata-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Únete a nuestra Comunidad WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;