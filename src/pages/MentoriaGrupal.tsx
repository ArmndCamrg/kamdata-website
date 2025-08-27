import React from 'react';
import Layout from '../components/Layout/Layout';

const MentoriaGrupal: React.FC = () => {
  return (
    <Layout
      title="Mentoría Grupal - Programa de Transformación Digital - Kamdata"
      description="Programa de mentoría grupal de 7 semanas para acelerar la transformación digital de tu equipo. Metodología probada con seguimiento personalizado y resultados medibles."
      keywords="mentoría grupal, transformación digital, programa 7 semanas, desarrollo de equipos, liderazgo digital, metodología ágil, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary to-kamdata-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mentoría Grupal
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Programa intensivo de 7 semanas para acelerar la transformación digital de tu equipo
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
                Transformación Acelerada en Equipo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro programa de mentoría grupal está diseñado para equipos que buscan acelerar su transformación digital 
                de manera colaborativa. Durante 7 semanas intensivas, tu equipo desarrollará las competencias necesarias 
                para liderar el cambio en su organización, con metodologías probadas y seguimiento personalizado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Grupos Pequeños</h3>
                <p className="text-gray-600">Máximo 8 participantes para atención personalizada</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resultados Medibles</h3>
                <p className="text-gray-600">KPIs claros y seguimiento semanal del progreso</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementación Rápida</h3>
                <p className="text-gray-600">Aplicación inmediata de conceptos en proyectos reales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programa de 7 Semanas */}
      <section id="programa" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Programa de 7 Semanas
              </h2>
              <p className="text-lg text-gray-600">
                Cada semana incluye 2 sesiones de 2 horas + trabajo práctico entre sesiones
              </p>
            </div>

            <div className="space-y-8">
              {/* Semana 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Diagnóstico y Visión Digital</h3>
                    <p className="text-kamdata-primary font-semibold">Fundamentos de la Transformación</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Evaluación del estado actual digital</li>
                      <li>• Definición de la visión de transformación</li>
                      <li>• Identificación de brechas y oportunidades</li>
                      <li>• Establecimiento de objetivos SMART</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Matriz de madurez digital</li>
                      <li>• Roadmap de transformación</li>
                      <li>• Plan de acción inicial</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Metodologías Ágiles</h3>
                    <p className="text-kamdata-primary font-semibold">Scrum, Kanban y Lean</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Dominio de frameworks ágiles</li>
                      <li>• Implementación de ceremonias Scrum</li>
                      <li>• Gestión visual con Kanban</li>
                      <li>• Principios Lean aplicados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Tablero Kanban funcional</li>
                      <li>• Ceremonias Scrum establecidas</li>
                      <li>• Métricas de velocidad</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Análisis de Datos</h3>
                    <p className="text-kamdata-primary font-semibold">Decisiones Basadas en Datos</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Identificación de KPIs relevantes</li>
                      <li>• Herramientas de visualización</li>
                      <li>• Análisis predictivo básico</li>
                      <li>• Cultura data-driven</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Dashboard de KPIs</li>
                      <li>• Reportes automatizados</li>
                      <li>• Proceso de toma de decisiones</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 4 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Liderazgo Digital</h3>
                    <p className="text-kamdata-primary font-semibold">Gestión del Cambio</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Habilidades de liderazgo digital</li>
                      <li>• Gestión de equipos remotos</li>
                      <li>• Comunicación efectiva</li>
                      <li>• Manejo de resistencia al cambio</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Plan de gestión del cambio</li>
                      <li>• Estrategia de comunicación</li>
                      <li>• Matriz de stakeholders</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 5 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">05</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Innovación y Design Thinking</h3>
                    <p className="text-kamdata-primary font-semibold">Soluciones Creativas</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Metodología Design Thinking</li>
                      <li>• Técnicas de ideación</li>
                      <li>• Prototipado rápido</li>
                      <li>• Validación de soluciones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Prototipo de solución</li>
                      <li>• Plan de validación</li>
                      <li>• Roadmap de innovación</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 6 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">06</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Tecnologías Emergentes</h3>
                    <p className="text-kamdata-primary font-semibold">IA, Automatización y Cloud</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Panorama de tecnologías emergentes</li>
                      <li>• Casos de uso de IA</li>
                      <li>• Estrategias de automatización</li>
                      <li>• Migración a la nube</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Estrategia tecnológica</li>
                      <li>• Plan de automatización</li>
                      <li>• Roadmap de adopción</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semana 7 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kamdata-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">07</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Implementación y Sostenibilidad</h3>
                    <p className="text-kamdata-primary font-semibold">Plan de Acción Final</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Objetivos:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Plan de implementación detallado</li>
                      <li>• Métricas de seguimiento</li>
                      <li>• Estrategia de sostenibilidad</li>
                      <li>• Presentación de resultados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Entregables:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Plan maestro de transformación</li>
                      <li>• Cronograma de implementación</li>
                      <li>• Sistema de métricas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nuestra Metodología
              </h2>
              <p className="text-lg text-gray-600">
                Un enfoque estructurado que garantiza resultados tangibles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Aprendizaje Experiencial</h3>
                    <p className="text-gray-600">70% práctica, 20% interacción grupal, 10% teoría</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proyectos Reales</h3>
                    <p className="text-gray-600">Aplicación inmediata en desafíos actuales de la organización</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mentoría Continua</h3>
                    <p className="text-gray-600">Acompañamiento personalizado entre sesiones</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Peer Learning</h3>
                    <p className="text-gray-600">Aprendizaje colaborativo entre participantes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Medición Continua</h3>
                    <p className="text-gray-600">Seguimiento semanal del progreso y ajustes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-kamdata-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sostenibilidad</h3>
                    <p className="text-gray-600">Plan de continuidad post-programa</p>
                  </div>
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
              Inversión
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-kamdata-primary mb-2">$4,500</div>
                <div className="text-gray-600 mb-4">por participante</div>
                <div className="text-sm text-gray-500 mb-6">
                  Programa completo de 7 semanas • 28 horas de mentoría
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">14 sesiones de mentoría grupal</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Materiales y recursos digitales</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Seguimiento personalizado</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Certificación de competencias</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">3 meses de soporte post-programa</span>
                  </div>
                </div>
                <div className="mt-6 p-3 bg-kamdata-primary/10 rounded-lg">
                  <p className="text-sm text-kamdata-primary font-semibold">
                    Descuento del 20% para grupos de 5+ participantes
                  </p>
                </div>
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
              ¿Listo para Acelerar la Transformación de tu Equipo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a nuestro próximo grupo de mentoría y transforma tu organización en 7 semanas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Reservar Cupo
              </a>
              <a 
                href="https://wa.me/5215512345678?text=Hola, me interesa información sobre la mentoría grupal de Kamdata" 
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

export default MentoriaGrupal;