import React from 'react';
import Layout from '../components/Layout/Layout';

const NexoEstrategico: React.FC = () => {
  return (
    <Layout
      title="Nexo Estratégico - Consultoría Ejecutiva de Alto Nivel - Kamdata"
      description="Servicio de consultoría estratégica exclusivo para C-Level y alta dirección. Transformación digital integral con enfoque en resultados de negocio y ventaja competitiva."
      keywords="consultoría estratégica, C-Level, alta dirección, transformación digital ejecutiva, estrategia digital, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-kamdata-primary to-kamdata-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-kamdata-accent/20 text-kamdata-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SERVICIO EXCLUSIVO C-LEVEL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nexo Estratégico
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Consultoría ejecutiva de élite para transformación digital integral y ventaja competitiva sostenible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#programa" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Programa
              </a>
              <a 
                href="#contacto-exclusivo" 
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Consultoría Estratégica de Élite
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Nexo Estratégico es nuestro servicio más exclusivo, diseñado específicamente para CEOs, CTOs, CDOs y 
                alta dirección que buscan una transformación digital integral con impacto directo en los resultados de negocio. 
                Combinamos estrategia, tecnología y liderazgo para crear ventajas competitivas sostenibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusividad</h3>
                <p className="text-gray-600">Máximo 12 clientes por año para garantizar atención personalizada</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Impacto Acelerado</h3>
                <p className="text-gray-600">Resultados medibles en los primeros 90 días de implementación</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipo Multidisciplinario</h3>
                <p className="text-gray-600">Expertos en estrategia, tecnología, datos y cambio organizacional</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">ROI Garantizado</h3>
                <p className="text-gray-600">Compromiso con retorno de inversión mínimo del 300% en 12 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programa Nexo Estratégico */}
      <section id="programa" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Programa de Transformación Integral
              </h2>
              <p className="text-lg text-gray-600">
                Un enfoque holístico en 5 dimensiones estratégicas para maximizar el impacto
              </p>
            </div>

            <div className="space-y-8">
              {/* Dimensión 1: Estrategia Digital */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-kamdata-primary to-kamdata-secondary text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Dimensión 1: Estrategia Digital</h3>
                      <p className="opacity-90">Redefinición del modelo de negocio y ventaja competitiva</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Componentes Clave:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Análisis de ecosistema digital y competencia</li>
                        <li>• Rediseño de propuesta de valor digital</li>
                        <li>• Identificación de nuevas fuentes de ingresos</li>
                        <li>• Estrategia de plataformas y ecosistemas</li>
                        <li>• Roadmap de innovación tecnológica</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Plan estratégico digital 3-5 años</li>
                        <li>• Modelo de negocio canvas digital</li>
                        <li>• Matriz de oportunidades de mercado</li>
                        <li>• Framework de innovación continua</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensión 2: Arquitectura Tecnológica */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-kamdata-secondary to-kamdata-accent text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Dimensión 2: Arquitectura Tecnológica</h3>
                      <p className="opacity-90">Infraestructura escalable y tecnologías emergentes</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Componentes Clave:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Arquitectura cloud-native y microservicios</li>
                        <li>• Integración de IA y machine learning</li>
                        <li>• Plataforma de datos unificada</li>
                        <li>• Automatización de procesos (RPA/BPM)</li>
                        <li>• Ciberseguridad y compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Blueprint de arquitectura empresarial</li>
                        <li>• Plan de migración cloud</li>
                        <li>• Stack tecnológico recomendado</li>
                        <li>• Estrategia de datos e IA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensión 3: Transformación Organizacional */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-kamdata-accent to-kamdata-primary text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Dimensión 3: Transformación Organizacional</h3>
                      <p className="opacity-90">Cultura digital y nuevos modelos operativos</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Componentes Clave:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Rediseño organizacional ágil</li>
                        <li>• Desarrollo de competencias digitales</li>
                        <li>• Gestión del cambio cultural</li>
                        <li>• Nuevos modelos de liderazgo</li>
                        <li>• Employee experience digital</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Nuevo organigrama y roles</li>
                        <li>• Plan de desarrollo de talento</li>
                        <li>• Estrategia de change management</li>
                        <li>• Programa de cultura digital</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensión 4: Customer Experience */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-kamdata-secondary text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Dimensión 4: Customer Experience</h3>
                      <p className="opacity-90">Experiencias digitales excepcionales y omnicanalidad</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Componentes Clave:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Journey mapping y touchpoints digitales</li>
                        <li>• Personalización basada en datos</li>
                        <li>• Omnicanalidad y ecosistema digital</li>
                        <li>• Automatización de customer service</li>
                        <li>• Métricas de experiencia en tiempo real</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Estrategia de customer experience</li>
                        <li>• Roadmap de touchpoints digitales</li>
                        <li>• Plataforma de engagement</li>
                        <li>• Dashboard de métricas CX</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensión 5: Inteligencia de Negocio */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-kamdata-accent text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Dimensión 5: Inteligencia de Negocio</h3>
                      <p className="opacity-90">Decisiones basadas en datos y analytics avanzados</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Componentes Clave:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Data lake y arquitectura de datos</li>
                        <li>• Analytics predictivos y prescriptivos</li>
                        <li>• Dashboards ejecutivos en tiempo real</li>
                        <li>• Automatización de reportes</li>
                        <li>• Cultura data-driven</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Plataforma de business intelligence</li>
                        <li>• Modelos predictivos personalizados</li>
                        <li>• Centro de excelencia en datos</li>
                        <li>• Governance de datos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología y Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Metodología y Timeline
              </h2>
              <p className="text-lg text-gray-600">
                Un proceso estructurado de 12 meses con hitos claros y resultados medibles
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Trimestre 1 */}
              <div className="text-center">
                <div className="bg-kamdata-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">Q1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Diagnóstico y Estrategia</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Assessment integral</li>
                  <li>• Definición de visión</li>
                  <li>• Roadmap estratégico</li>
                  <li>• Quick wins</li>
                </ul>
              </div>

              {/* Trimestre 2 */}
              <div className="text-center">
                <div className="bg-kamdata-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">Q2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fundaciones Digitales</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Arquitectura tecnológica</li>
                  <li>• Plataforma de datos</li>
                  <li>• Procesos core</li>
                  <li>• Capacitación inicial</li>
                </ul>
              </div>

              {/* Trimestre 3 */}
              <div className="text-center">
                <div className="bg-kamdata-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">Q3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementación Avanzada</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Soluciones de IA</li>
                  <li>• Customer experience</li>
                  <li>• Automatización</li>
                  <li>• Cultura digital</li>
                </ul>
              </div>

              {/* Trimestre 4 */}
              <div className="text-center">
                <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">Q4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimización y Escala</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Escalamiento global</li>
                  <li>• Optimización continua</li>
                  <li>• Sostenibilidad</li>
                  <li>• Innovación continua</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Exclusivo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Equipo Multidisciplinario de Élite
              </h2>
              <p className="text-lg text-gray-600">
                Profesionales senior con experiencia comprobada en transformaciones digitales exitosas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Director de Estrategia</h3>
                <p className="text-gray-600 text-sm">Ex-consultor McKinsey/BCG con 15+ años en transformación digital de Fortune 500</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Arquitecto Tecnológico</h3>
                <p className="text-gray-600 text-sm">Ex-CTO de unicornios tech, especialista en arquitecturas cloud-native y IA empresarial</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chief Data Scientist</h3>
                <p className="text-gray-600 text-sm">PhD en Machine Learning, ex-Google/Microsoft, líder en implementación de IA empresarial</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Director de Cambio</h3>
                <p className="text-gray-600 text-sm">Psicólogo organizacional con MBA, especialista en transformación cultural y change management</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">UX/CX Director</h3>
                <p className="text-gray-600 text-sm">Ex-Head of Design en FAANG, experto en customer experience y design thinking empresarial</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">CISO Senior</h3>
                <p className="text-gray-600 text-sm">Certificado CISSP/CISM, ex-director de ciberseguridad en banca, especialista en compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión y ROI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Inversión Estratégica
              </h2>
              <p className="text-lg text-gray-600">
                Una inversión que se paga sola con los resultados del primer año
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-kamdata-primary text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-kamdata-accent mb-2">PROGRAMA COMPLETO 12 MESES</div>
                <div className="text-5xl font-bold mb-4">$250,000 USD</div>
                <div className="text-lg opacity-90 mb-6">Transformación integral con ROI garantizado del 300%</div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kamdata-accent">$750K+</div>
                    <div className="text-sm opacity-90">ROI Mínimo Garantizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kamdata-accent">90 días</div>
                    <div className="text-sm opacity-90">Primeros Resultados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kamdata-accent">24/7</div>
                    <div className="text-sm opacity-90">Soporte Ejecutivo</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Incluye:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Equipo multidisciplinario dedicado
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Implementación de 5 dimensiones
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tecnología y licencias incluidas
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Capacitación de 100+ colaboradores
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Soporte post-implementación 6 meses
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Garantía de resultados
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-kamdata-accent/20 border border-kamdata-accent rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Garantía Nexo:</strong> Si no alcanzas un ROI mínimo del 300% en 12 meses, 
                    continuamos trabajando sin costo adicional hasta lograrlo.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                <strong>Modalidades de pago:</strong> Pago único con 15% descuento | 4 pagos trimestrales | Modelo de éxito compartido
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Selección */}
      <section id="contacto-exclusivo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Proceso de Selección Exclusivo
              </h2>
              <p className="text-lg text-gray-600">
                Debido a la naturaleza exclusiva del programa, seguimos un proceso de selección riguroso
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-kamdata-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Solicitud Inicial</h3>
                <p className="text-sm text-gray-600">Formulario de pre-calificación y NDA</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Entrevista Ejecutiva</h3>
                <p className="text-sm text-gray-600">Sesión de 90 min con nuestro CEO</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Assessment Técnico</h3>
                <p className="text-sm text-gray-600">Evaluación de madurez digital</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Propuesta Personalizada</h3>
                <p className="text-sm text-gray-600">Plan específico y términos finales</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Criterios de Selección</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Perfil Organizacional:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Facturación anual mínima: $50M USD</li>
                    <li>• Más de 200 empleados</li>
                    <li>• Compromiso de C-Level demostrado</li>
                    <li>• Presupuesto de transformación digital</li>
                    <li>• Visión de crecimiento a 3-5 años</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Readiness Digital:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Infraestructura tecnológica básica</li>
                    <li>• Cultura de innovación incipiente</li>
                    <li>• Datos disponibles para análisis</li>
                    <li>• Equipo interno de TI</li>
                    <li>• Apertura al cambio organizacional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-kamdata-primary to-kamdata-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu Organización Está Lista para el Siguiente Nivel?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solo 12 organizaciones por año tienen acceso a Nexo Estratégico. 
              Solicita tu evaluación de elegibilidad hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Evaluación
              </a>
              <a 
                href="mailto:nexo@kamdata.com?subject=Solicitud Nexo Estratégico&body=Estimado equipo Kamdata,%0D%0A%0D%0ASolicito información sobre el programa Nexo Estratégico.%0D%0A%0D%0AEmpresa:%0D%0ACargo:%0D%0ATeléfono:%0D%0A%0D%0AGracias" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                nexo@kamdata.com
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 Línea directa C-Level: +52 55 1234 5678 | 🔒 Confidencialidad garantizada</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NexoEstrategico;