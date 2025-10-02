import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const MentoriaIndividual: React.FC = () => {
  return (
    <Layout
      title="Mentoría Individual 1:1 - Transformación Digital Personalizada - Kamdata"
      description="Mentoría individual personalizada para líderes que buscan acelerar su transformación digital. Proceso 1:1 con expertos, plan personalizado y resultados garantizados."
      keywords="mentoría individual, coaching ejecutivo, transformación digital personalizada, liderazgo digital, desarrollo profesional, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mentoría Individual 1:1
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transformación digital personalizada con acompañamiento exclusivo de nuestros expertos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#proceso" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Proceso
              </a>
              <a 
                href="/contacto" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                Agendar Consulta
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
                Acompañamiento Ejecutivo Personalizado
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra mentoría individual está diseñada para líderes y ejecutivos que buscan acelerar su transformación 
                digital de manera personalizada. Con un enfoque 1:1, desarrollamos un plan específico para tus desafíos, 
                objetivos y contexto organizacional, garantizando resultados tangibles y medibles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Personalizado</h3>
                <p className="text-gray-600">Plan diseñado específicamente para tus necesidades y contexto</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexibilidad Total</h3>
                <p className="text-gray-600">Horarios y metodología adaptados a tu agenda ejecutiva</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resultados Garantizados</h3>
                <p className="text-gray-600">Compromiso con objetivos específicos y medibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Mentoría */}
      <section id="proceso" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Proceso de Mentoría 1:1
              </h2>
              <p className="text-lg text-gray-600">
                Un proceso estructurado en 6 fases para maximizar tu transformación digital
              </p>
            </div>

            <div className="space-y-8">
              {/* Fase 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Diagnóstico Integral</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 1-2 • Evaluación Completa</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Actividades:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Evaluación 360° de competencias digitales</li>
                      <li>• Análisis del contexto organizacional</li>
                      <li>• Identificación de fortalezas y brechas</li>
                      <li>• Mapeo de stakeholders clave</li>
                      <li>• Definición de objetivos SMART</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Reporte de diagnóstico personalizado</li>
                      <li>• Matriz de competencias digitales</li>
                      <li>• Plan de desarrollo individual</li>
                      <li>• Roadmap de transformación</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Desarrollo de Competencias</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 3-8 • Capacitación Intensiva</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Áreas de Enfoque:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Liderazgo digital y gestión del cambio</li>
                      <li>• Metodologías ágiles y lean</li>
                      <li>• Análisis de datos y toma de decisiones</li>
                      <li>• Innovación y design thinking</li>
                      <li>• Tecnologías emergentes aplicadas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Metodología:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Sesiones semanales de 2 horas</li>
                      <li>• Casos de estudio personalizados</li>
                      <li>• Ejercicios prácticos aplicados</li>
                      <li>• Recursos de aprendizaje curados</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Implementación Práctica</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 9-12 • Aplicación Real</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Proyectos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Selección de proyecto piloto</li>
                      <li>• Aplicación de metodologías aprendidas</li>
                      <li>• Implementación de mejoras</li>
                      <li>• Medición de resultados</li>
                      <li>• Ajustes y optimización</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Soporte:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Acompañamiento en implementación</li>
                      <li>• Resolución de obstáculos</li>
                      <li>• Coaching en tiempo real</li>
                      <li>• Feedback continuo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 4 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Escalamiento y Replicación</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 13-16 • Expansión</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Escalamiento de mejores prácticas</li>
                      <li>• Replicación en otras áreas</li>
                      <li>• Desarrollo de capacidades internas</li>
                      <li>• Creación de cultura digital</li>
                      <li>• Establecimiento de procesos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Actividades:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Plan de escalamiento</li>
                      <li>• Capacitación de multiplicadores</li>
                      <li>• Documentación de procesos</li>
                      <li>• Métricas de seguimiento</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 5 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">05</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Medición y Optimización</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 17-20 • Análisis de Resultados</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Métricas Clave:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• ROI de la transformación digital</li>
                      <li>• Indicadores de productividad</li>
                      <li>• Métricas de satisfacción del equipo</li>
                      <li>• Velocidad de implementación</li>
                      <li>• Adopción de nuevas tecnologías</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Optimización:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Análisis de gaps restantes</li>
                      <li>• Ajustes en la estrategia</li>
                      <li>• Mejora continua de procesos</li>
                      <li>• Plan de sostenibilidad</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 6 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">06</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Sostenibilidad y Evolución</h3>
                    <p className="text-kamdata-primary font-semibold">Semanas 21-24 • Consolidación</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Consolidación:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Plan de sostenibilidad a largo plazo</li>
                      <li>• Desarrollo de capacidades internas</li>
                      <li>• Establecimiento de governance</li>
                      <li>• Roadmap de evolución continua</li>
                      <li>• Red de contactos y recursos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables Finales:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Reporte ejecutivo de resultados</li>
                      <li>• Plan estratégico de continuidad</li>
                      <li>• Toolkit de herramientas</li>
                      <li>• Certificación de competencias</li>
                    </ul>
                  </div>
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
                Modalidades de Mentoría
              </h2>
              <p className="text-lg text-gray-600">
                Elige la modalidad que mejor se adapte a tu estilo y necesidades
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white rounded-lg p-6">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3">Presencial</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Sesiones cara a cara en tu oficina o nuestras instalaciones
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Interacción directa</li>
                    <li>• Observación in-situ</li>
                    <li>• Networking presencial</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-kamdata-primary rounded-lg p-6">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Virtual</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Sesiones en línea con tecnología de última generación
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Flexibilidad horaria</li>
                    <li>• Grabaciones disponibles</li>
                    <li>• Herramientas digitales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-kamdata-accent/10 border-2 border-kamdata-accent rounded-lg p-6">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-kamdata-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Híbrida</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Combinación de sesiones presenciales y virtuales
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Máxima flexibilidad</li>
                    <li>• Mejor de ambos mundos</li>
                    <li>• Adaptable a necesidades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Inversión en tu Transformación
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Programa Estándar */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Programa Estándar</h3>
                  <div className="text-4xl font-bold text-kamdata-primary mb-2">$18,000</div>
                  <div className="text-gray-600 mb-6">6 meses • 48 horas de mentoría</div>
                  <div className="space-y-3 text-left mb-8">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">24 sesiones de mentoría 1:1</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Plan de desarrollo personalizado</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Recursos y herramientas digitales</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Soporte entre sesiones</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Certificación de competencias</span>
                    </div>
                  </div>
                  <button className="w-full bg-kamdata-primary text-white py-3 rounded-lg font-semibold hover:bg-kamdata-primary/90 transition-colors">
                    Seleccionar Plan
                  </button>
                </div>
              </div>

              {/* Programa Premium */}
              <div className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-4 right-4 bg-kamdata-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Recomendado
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Programa Premium</h3>
                  <div className="text-4xl font-bold mb-2">$28,000</div>
                  <div className="opacity-90 mb-6">6 meses • 60 horas + extras</div>
                  <div className="space-y-3 text-left mb-8">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Todo lo del plan estándar +</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">6 sesiones adicionales de seguimiento</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Acceso a red exclusiva de líderes</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Consultoría para tu equipo (8 horas)</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Soporte prioritario 24/7</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-kamdata-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Seleccionar Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-kamdata-primary/10 rounded-lg">
              <p className="text-sm text-kamdata-primary font-semibold">
                💡 Planes de pago flexibles disponibles • Garantía de satisfacción 100%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Acelerar tu Transformación Digital?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consulta gratuita de 30 minutos para evaluar tu situación actual y diseñar tu plan personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar Consulta Gratuita
              </a>
              <a 
                href="https://wa.me/5215512345678?text=Hola, me interesa información sobre la mentoría individual de Kamdata" 
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

export default MentoriaIndividual;