import React from 'react';
import Layout from '../components/Layout/Layout';

const Talleres: React.FC = () => {
  return (
    <Layout
      title="Talleres de Transformación Digital - Kamdata"
      description="Talleres prácticos e intensivos para desarrollar habilidades digitales clave. Aprende metodologías ágiles, análisis de datos y liderazgo digital con expertos de Kamdata."
      keywords="talleres digitales, transformación digital, metodologías ágiles, análisis de datos, liderazgo digital, capacitación empresarial, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Talleres de Transformación Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Experiencias de aprendizaje intensivas y prácticas para desarrollar las habilidades digitales que tu organización necesita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#programa" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Programa
              </a>
              <a 
                href="/contacto" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                Solicitar Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Aprendizaje Práctico e Intensivo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestros talleres están diseñados para proporcionar experiencias de aprendizaje intensivas y altamente prácticas. 
                Cada taller combina teoría sólida con ejercicios hands-on, casos de estudio reales y metodologías probadas 
                para garantizar que los participantes adquieran habilidades aplicables inmediatamente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metodología Práctica</h3>
                <p className="text-gray-600">70% práctica, 30% teoría para máximo aprovechamiento</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Grupos Reducidos</h3>
                <p className="text-gray-600">Máximo 15 participantes para atención personalizada</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificación</h3>
                <p className="text-gray-600">Certificado de participación y competencias adquiridas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programa de Talleres */}
      <section id="programa" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Catálogo de Talleres Disponibles
              </h2>
              <p className="text-lg text-gray-600">
                Selecciona los talleres que mejor se adapten a las necesidades de tu organización
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Taller 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-kamdata-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Metodologías Ágiles</h3>
                    <p className="text-kamdata-primary font-semibold">16 horas • 2 días</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Domina Scrum, Kanban y Lean para optimizar procesos y aumentar la productividad del equipo.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Fundamentos de Scrum y roles</li>
                  <li>• Implementación de Kanban</li>
                  <li>• Técnicas de estimación ágil</li>
                  <li>• Retrospectivas efectivas</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-kamdata-primary">$890</span>
                  <span className="text-sm text-gray-500">por persona</span>
                </div>
              </div>

              {/* Taller 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-kamdata-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Análisis de Datos</h3>
                    <p className="text-kamdata-primary font-semibold">20 horas • 3 días</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Aprende a extraer insights valiosos de tus datos usando herramientas modernas y técnicas estadísticas.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Fundamentos de estadística</li>
                  <li>• Visualización de datos</li>
                  <li>• Excel avanzado y Power BI</li>
                  <li>• Interpretación de resultados</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-kamdata-primary">$1,200</span>
                  <span className="text-sm text-gray-500">por persona</span>
                </div>
              </div>

              {/* Taller 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-kamdata-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Liderazgo Digital</h3>
                    <p className="text-kamdata-primary font-semibold">12 horas • 2 días</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Desarrolla las habilidades de liderazgo necesarias para dirigir equipos en la era digital.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Liderazgo en equipos remotos</li>
                  <li>• Comunicación digital efectiva</li>
                  <li>• Gestión del cambio</li>
                  <li>• Cultura de innovación</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-kamdata-primary">$750</span>
                  <span className="text-sm text-gray-500">por persona</span>
                </div>
              </div>

              {/* Taller 4 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-kamdata-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Design Thinking</h3>
                    <p className="text-kamdata-primary font-semibold">16 horas • 2 días</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Aplica metodologías de design thinking para resolver problemas complejos e innovar en tu organización.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Proceso de design thinking</li>
                  <li>• Técnicas de ideación</li>
                  <li>• Prototipado rápido</li>
                  <li>• Testing con usuarios</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-kamdata-primary">$950</span>
                  <span className="text-sm text-gray-500">por persona</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Modalidades Disponibles
              </h2>
              <p className="text-lg text-gray-600">
                Elige la modalidad que mejor se adapte a tu organización
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-2xl font-bold">Presencial</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Talleres en tus instalaciones o en nuestras salas de capacitación equipadas con la última tecnología.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Interacción directa con facilitadores
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Networking con otros participantes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Materiales físicos incluidos
                  </li>
                </ul>
                <p className="text-sm opacity-75">
                  Disponible en Ciudad de México, Guadalajara y Monterrey
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-kamdata-primary rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800">Virtual</h3>
                </div>
                <p className="mb-6 text-gray-600">
                  Talleres en línea con la misma calidad y metodología, accesibles desde cualquier ubicación.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Plataforma interactiva avanzada
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Grabaciones para repaso
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recursos digitales descargables
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Descuento del 15% en modalidad virtual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar las Habilidades de tu Equipo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos para diseñar un programa de talleres personalizado para tu organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Cotización
              </a>
              <a 
                href="https://wa.me/5215512345678?text=Hola, me interesa información sobre los talleres de Kamdata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Talleres;