import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Servicios: React.FC = () => {
  const servicios = [
    {
      id: 'conferencias',
      titulo: 'Conferencias',
      subtitulo: 'Despierta tu Genio Digital',
      descripcion: 'Inspira, conecta, transforma',
      detalle: 'Conferencias presenciales y virtuales diseñadas para organizaciones que buscan despertar la mentalidad digital en sus equipos.',
      icono: '🎤',
      modalidades: ['Presencial', 'Virtual', 'Híbrida'],
      duracion: '60-90 minutos',
      audiencia: 'Equipos y organizaciones',
      link: '/servicios/conferencias'
    },
    {
      id: 'talleres',
      titulo: 'Talleres',
      subtitulo: 'Aprende haciendo. Avanza con claridad',
      descripcion: 'Formación práctica y aplicable',
      detalle: 'Talleres interactivos donde aprendes haciendo. Ejemplos: "Organiza tus datos en 3 pasos", "Automatiza sin complicarte".',
      icono: '🛠️',
      modalidades: ['Presencial', 'Virtual'],
      duracion: '2-4 horas',
      audiencia: 'Profesionales y equipos',
      link: '/servicios/talleres'
    },
    {
      id: 'mentoria-grupal',
      titulo: 'Mentoría Grupal',
      subtitulo: 'Programa de 7 semanas',
      descripcion: 'Comunidad, estructura, resultados',
      detalle: 'Programa estructurado de 7 semanas con comunidad de aprendizaje, calendario definido e inscripciones abiertas.',
      icono: '👥',
      modalidades: ['Virtual', 'Híbrida'],
      duracion: '7 semanas',
      audiencia: 'Grupos de profesionales',
      link: '/servicios/mentoria-grupal'
    },
    {
      id: 'mentoria-individual',
      titulo: 'Mentoría Individual',
      subtitulo: 'Acompañamiento 1:1',
      descripcion: 'Flexible, confidencial y profundo',
      detalle: 'Acompañamiento personalizado uno a uno, flexible y confidencial para casos específicos y necesidades particulares.',
      icono: '🎯',
      modalidades: ['Presencial', 'Virtual'],
      duracion: 'Flexible',
      audiencia: 'Profesionales individuales',
      link: '/servicios/mentoria-individual'
    },
    {
      id: 'nexo-estrategico',
      titulo: 'Nexo Estratégico',
      subtitulo: 'Servicio especializado',
      descripcion: 'Diagnóstico y Fase 0',
      detalle: 'Servicio especializado con diagnóstico profundo, Fase 0 de implementación y modelo híbrido de tarifa fija + comisión.',
      icono: '🚀',
      modalidades: ['Presencial', 'Virtual', 'Híbrida'],
      duracion: '3-6 meses',
      audiencia: 'Empresas y organizaciones',
      link: '/servicios/nexo-estrategico'
    }
  ];

  return (
    <Layout
      title="Servicios - Mentoría y Formación en Gestión de Datos | Kamdata"
      description="Descubre nuestros servicios de mentoría y formación: conferencias, talleres, mentoría grupal e individual, y nexo estratégico. No navegamos por ti, te damos la brújula."
      keywords="servicios kamdata, mentoria datos, conferencias, talleres, formacion, consultoria datos"
    >
 {/* INICIA BLOQUE DE SEO 2.0 (DATOS ESTRUCTURADOS) */}
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Servicios de Mentoría y Formación en Datos",
              "description": "Descubre nuestros servicios diseñados para convertir datos en decisiones estratégicas: conferencias, talleres interactivos y mentorías personalizadas para profesionales y PyMEs en México.",
              "provider": {
                "@type": "Organization",
                "name": "Kamdata",
                "url": "https://www.kamdata.com.mx"
              },
              "serviceType": "Consultoría y Formación en Gestión de Datos",
              "areaServed": {
                "@type": "Country",
                "name": "Mexico"
              }
            }
          `}
        </script>
      </Helmet>
      {/* TERMINA BLOQUE DE SEO 2.0 */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary/10 to-kamdata-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-kamdata-primary">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              "No navegamos por ti. Te damos la brújula y te enseñamos cómo."
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                Kamdata ofrece mentoría y formación práctica para convertir datos en decisiones estratégicas.
              </p>
              <p className="text-gray-600">
                <strong>No somos consultores, somos habilitadores.</strong> Nuestra función es triple:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧭</div>
                  <h3 className="font-semibold text-kamdata-primary">Dar la brújula</h3>
                  <p className="text-sm text-gray-600">Claridad en la dirección</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <h3 className="font-semibold text-kamdata-primary">Enseñar a leer el terreno</h3>
                  <p className="text-sm text-gray-600">Contexto y comprensión</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛤️</div>
                  <h3 className="font-semibold text-kamdata-primary">Guiar para trazar rutas</h3>
                  <p className="text-sm text-gray-600">Enfoque y metodología</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{servicio.icono}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{servicio.titulo}</h3>
                    <p className="text-kamdata-primary font-semibold text-lg mb-2">{servicio.subtitulo}</p>
                    <p className="text-gray-600 mb-4">{servicio.detalle}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Modalidades:</h4>
                    <div className="flex flex-wrap gap-1">
                      {servicio.modalidades.map((modalidad, idx) => (
                        <span key={idx} className="px-2 py-1 bg-kamdata-primary/10 text-kamdata-primary rounded text-xs">
                          {modalidad}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Duración:</h4>
                    <p className="text-gray-600">{servicio.duracion}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-1">Audiencia:</h4>
                  <p className="text-gray-600 text-sm">{servicio.audiencia}</p>
                </div>
                
                <Link
                  to={servicio.link}
                  className="inline-flex items-center px-6 py-3 bg-kamdata-primary text-white font-semibold rounded-lg hover:bg-kamdata-primary/90 transition-colors"
                >
                  Conocer más detalles
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seguimos una metodología probada que garantiza resultados tangibles y sostenibles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">Evaluamos tu situación actual y identificamos oportunidades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño</h3>
              <p className="text-gray-600 text-sm">Creamos un plan personalizado según tus necesidades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementación</h3>
              <p className="text-gray-600 text-sm">Te acompañamos en la ejecución práctica</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento</h3>
              <p className="text-gray-600 text-sm">Monitoreamos resultados y ajustamos según sea necesario</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No estás seguro cuál servicio necesitas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda un diagnóstico gratuito y te ayudamos a identificar la mejor opción para tu situación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-kamdata-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Agenda tu Diagnóstico Gratuito
            </Link>
            <Link
              to="/metodo-dance"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-kamdata-primary transition-colors"
            >
              Conoce el Método DANCE
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;