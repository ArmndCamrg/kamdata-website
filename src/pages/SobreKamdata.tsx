import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const SobreKamdata: React.FC = () => {
  const valores = [
    {
      letra: 'K',
      nombre: 'Conocimiento',
      descripcion: 'Compartimos expertise basado en experiencia real y metodologías probadas',
      icono: '📚'
    },
    {
      letra: 'A',
      nombre: 'Responsabilidad',
      descripcion: 'Asumimos el compromiso de generar resultados tangibles y medibles',
      icono: '✅'
    },
    {
      letra: 'M',
      nombre: 'Mentoría',
      descripcion: 'Acompañamos el proceso de transformación con guía personalizada',
      icono: '🌟'
    },
    {
      letra: 'D',
      nombre: 'Dinamismo',
      descripcion: 'Adaptamos nuestro enfoque a las necesidades específicas de cada cliente',
      icono: '⚡'
    },
    {
      letra: 'A',
      nombre: 'Acción',
      descripcion: 'Priorizamos la implementación práctica sobre la teoría',
      icono: '🎯'
    },
    {
      letra: 'T',
      nombre: 'Trayectoria',
      descripcion: 'Respaldamos nuestro trabajo con experiencia comprobada en el sector',
      icono: '🧭'
    },
    {
      letra: 'A',
      nombre: 'Actitud',
      descripcion: 'Mantenemos una perspectiva positiva y orientada a soluciones',
      icono: '😊'
    }
  ];

  const equipo = [
    {
      nombre: 'Karla María Martínez Lemus',
      rol: 'Fundadora y CEO',
      bio: 'Experta en estrategias de datos con más de 10 años de experiencia ayudando a empresas a transformar su relación con los datos. Creadora del Método DANCE y mentora certificada en transformación digital.',
      especialidades: ['Método DANCE', 'Estrategia de Datos', 'Mentoría Ejecutiva', 'Transformación Digital']
    },
    {
      nombre: 'Armando Camargo Peña',
      rol: 'Co-Fundador y CDTO',
      bio: 'Ingeniero especializado en arquitecturas de datos y soluciones tecnológicas. Experto en implementación de sistemas de análisis y automatización para PyMEs.',
      especialidades: ['Arquitectura de Datos', 'Automatización', 'Integración de Sistemas', 'Análisis Técnico']
    }
  ];

  return (
    <Layout
      title="Sobre Kamdata - Quiénes Somos | Kamdata"
      description="Conoce a kamdata: empresa de mentoría especializada en convertir datos en decisiones estratégicas. Descubre nuestra misión, visión, valores K.A.M.D.A.T.A. y equipo."
      keywords="sobre kamdata, quienes somos, mision vision, valores kamdata, equipo kamdata, karla martinez, armando camargo"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary/10 to-kamdata-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-kamdata-primary">Kamdata</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa de mentoría que habilita a profesionales y líderes de PyMEs 
              para convertir sus datos en decisiones claras, sostenibles y estratégicas.
            </p>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Quiénes Somos?</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Kamdata es una empresa de mentoría que habilita a profesionales y líderes de PyMEs 
                  para convertir sus datos en decisiones claras, sostenibles y estratégicas.
                </p>
                <p>
                  No somos consultores tradicionales. Somos <strong className="text-kamdata-primary">habilitadores</strong> que 
                  te enseñamos a navegar el mundo de los datos con autonomía y confianza.
                </p>
                <p className="text-kamdata-accent font-semibold text-xl">
                  "No navegamos por ti. Te damos la brújula y te enseñamos cómo."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-kamdata-primary/20 to-kamdata-accent/20 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🧭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Filosofía</h3>
                <p className="text-gray-600">Te damos las herramientas y el conocimiento para que navegues con autonomía</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kamdata-primary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
              </div>
              <p className="text-lg text-gray-600">
                Democratizar la gestión estratégica de datos para decisiones con propósito.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kamdata-accent rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-lg text-gray-600">
                Ser la mentora en estrategias de datos más reconocida del mundo hispano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores K.A.M.D.A.T.A. */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores <span className="text-kamdata-primary">K.A.M.D.A.T.A.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada letra de nuestro nombre representa un valor fundamental que guía nuestro trabajo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{valor.letra}</span>
                  </div>
                  <div className="text-2xl mb-2">{valor.icono}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{valor.nombre}</h3>
                  <p className="text-gray-600 text-sm">{valor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas que hacen posible la transformación de datos en decisiones estratégicas
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipo.map((miembro, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-kamdata-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">
                      {miembro.nombre.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                  <p className="text-kamdata-primary font-semibold mb-4">{miembro.rol}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{miembro.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {miembro.especialidades.map((especialidad, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-kamdata-primary/10 text-kamdata-primary rounded-full text-sm"
                      >
                        {especialidad}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tus datos en decisiones estratégicas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya han descubierto el poder de la gestión estratégica de datos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-kamdata-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Agenda tu Diagnóstico Gratuito
            </a>
            <a
              href="/metodo-dance"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-kamdata-primary transition-colors"
            >
              Descubre el Método DANCE
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreKamdata;