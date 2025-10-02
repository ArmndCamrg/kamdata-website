import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const MetodoDance: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      letter: 'D',
      name: 'Diagnostica',
      title: 'Diagnostica tu Situación Actual',
      description: 'Como afinar un piano, primero identificamos qué está desafinado en tu gestión de datos',
      color: 'from-red-500 to-red-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      analogy: '🎹 Como un pianista que afina su instrumento antes de tocar, diagnosticamos el estado actual de tus datos para identificar qué necesita ajuste.',
      activities: [
        'Evaluación del estado actual de tus datos',
        'Identificación de procesos manuales repetitivos',
        'Análisis de herramientas existentes',
        'Mapeo de fuentes de información',
        'Detección de puntos de dolor en la gestión'
      ],
      deliverables: [
        'Reporte de diagnóstico integral',
        'Matriz de madurez en gestión de datos',
        'Identificación de oportunidades de mejora',
        'Mapa de procesos actuales'
      ],
      duration: '1-2 semanas'
    },
    {
      letter: 'A',
      name: 'Alinea',
      title: 'Alinea Objetivos y Recursos',
      description: 'Como un chef que organiza sus ingredientes, alineamos tus objetivos con los recursos disponibles',
      color: 'from-orange-500 to-orange-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      analogy: '👨‍🍳 Como un chef que organiza sus ingredientes antes de cocinar, alineamos tus objetivos de negocio con los recursos y capacidades disponibles.',
      activities: [
        'Definición clara de objetivos de negocio',
        'Priorización de iniciativas según impacto',
        'Evaluación de recursos disponibles',
        'Alineación de expectativas del equipo',
        'Establecimiento de métricas de éxito'
      ],
      deliverables: [
        'Plan estratégico alineado',
        'Roadmap priorizado de iniciativas',
        'Definición de roles y responsabilidades',
        'Métricas y KPIs establecidos'
      ],
      duration: '1-2 semanas'
    },
    {
      letter: 'N',
      name: 'Navega',
      title: 'Navega hacia la Solución',
      description: 'Como un atleta que entrena paso a paso, navegamos juntos hacia tu objetivo con un plan claro',
      color: 'from-yellow-500 to-yellow-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      analogy: '🏃‍♂️ Como un atleta que sigue un plan de entrenamiento estructurado, navegamos paso a paso hacia tus objetivos con un rumbo claro y medible.',
      activities: [
        'Diseño del plan de implementación',
        'Identificación de herramientas adecuadas',
        'Planificación de la gestión del cambio',
        'Preparación del equipo para la transformación',
        'Establecimiento de hitos y checkpoints'
      ],
      deliverables: [
        'Plan detallado de implementación',
        'Selección de herramientas y tecnologías',
        'Estrategia de gestión del cambio',
        'Cronograma con hitos claros'
      ],
      duration: '2-3 semanas'
    },
    {
      letter: 'C',
      name: 'Construye',
      title: 'Construye tu Solución',
      description: 'Como construir una casa sólida, implementamos tu solución con bases firmes y escalables',
      color: 'from-green-500 to-green-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      analogy: '🏗️ Como construir una casa con cimientos sólidos, implementamos tu solución de datos paso a paso, asegurándonos de que cada elemento sea robusto y escalable.',
      activities: [
        'Implementación de herramientas seleccionadas',
        'Configuración de procesos automatizados',
        'Integración de fuentes de datos',
        'Desarrollo de dashboards y reportes',
        'Pruebas y validación de la solución'
      ],
      deliverables: [
        'Solución implementada y funcionando',
        'Procesos automatizados configurados',
        'Dashboards y reportes operativos',
        'Documentación técnica completa'
      ],
      duration: '4-8 semanas'
    },
    {
      letter: 'E',
      name: 'Ejecuta',
      title: 'Ejecuta y Optimiza Continuamente',
      description: 'Como un director de orquesta que perfecciona cada interpretación, ejecutamos y optimizamos constantemente',
      color: 'from-blue-500 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      analogy: '🎼 Como un director de orquesta que perfecciona cada interpretación, ejecutamos tu solución y la optimizamos continuamente para obtener la mejor "sinfonía" de datos.',
      activities: [
        'Monitoreo continuo de la solución',
        'Optimización basada en resultados',
        'Capacitación continua del equipo',
        'Escalamiento a nuevas áreas',
        'Planificación de mejoras futuras'
      ],
      deliverables: [
        'Sistema de monitoreo implementado',
        'Plan de optimización continua',
        'Equipo capacitado y autónomo',
        'Roadmap de crecimiento futuro'
      ],
      duration: 'Continuo'
    }
  ];

  return (
    <Layout
      title="Método DANCE - Metodología de Transformación Digital - Kamdata"
      description="Conoce el Método DANCE, nuestra metodología probada de 5 fases para la transformación digital exitosa: Diagnóstico, Análisis, Navegación, Construcción y Evolución."
      keywords="método DANCE, metodología transformación digital, diagnóstico digital, análisis estratégico, gestión cambio, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary via-kamdata-secondary to-kamdata-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Método <span className="text-kamdata-accent">DANCE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Nuestra metodología probada de 5 fases para transformaciones digitales exitosas y sostenibles
            </p>
            <div className="flex justify-center items-end space-x-2 sm:space-x-4 mb-8 max-w-2xl mx-auto">
              {phases.map((phase, index) => {
                // Definir la altura de cada elemento para crear el arco
                let marginBottom = '';
                if (index === 0 || index === 4) { // D y E en la base
                  marginBottom = 'mb-0';
                } else if (index === 1 || index === 3) { // A y C en segundo nivel
                  marginBottom = 'mb-8';
                } else if (index === 2) { // N en el centro superior
                  marginBottom = 'mb-16';
                }
                
                return (
                  <div key={index} className={`text-center ${marginBottom}`}>
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-xl sm:text-2xl font-bold mb-2 shadow-lg`}>
                      {phase.letter}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{phase.name}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#metodologia" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explorar Metodología
              </a>
              <a 
                href="/contacto" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                Aplicar DANCE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ¿Qué es el Método DANCE?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                El Método DANCE es nuestra metodología probada de 5 pasos para convertir la gestión de datos en un hábito estratégico. 
                Como aprender a tocar piano, cocinar o hacer deporte, cada paso se construye sobre el anterior para crear una base sólida y sostenible.
              </p>
              
              {/* CTA Descargable */}
              <div className="bg-kamdata-primary/10 rounded-lg p-6 max-w-md mx-auto mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📥 Descarga Gratuita</h3>
                <p className="text-gray-600 mb-4">Obtén nuestra guía rápida del Método DANCE</p>
                <a 
                  href="/guia-metodo-dance.pdf" 
                  download="Guia-Metodo-DANCE-Kamdata.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-kamdata-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-kamdata-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Guía Rápida del Método DANCE (PDF gratuito)
                </a>
              </div>
            </div>

            {/* Imagen Ilustrativa del Método */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="/kamdata-team.png" 
                  alt="Equipo Kamdata aplicando el Método DANCE" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Un Método Probado por Expertos
                </h3>
                <p className="text-gray-600 mb-6">
                  El Método DANCE ha sido desarrollado y perfeccionado por nuestro equipo de expertos 
                  en gestión de datos, con más de 10 años de experiencia transformando organizaciones.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-kamdata-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Metodología validada en más de 200 proyectos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-kamdata-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Adaptable a cualquier industria y tamaño</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-kamdata-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Resultados medibles desde la primera fase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Analogías */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎹</div>
                <h3 className="text-xl font-semibold mb-2">Como Tocar Piano</h3>
                <p className="text-gray-600">Primero diagnosticas qué sabes, alineas tus objetivos, navegas por las lecciones, construyes tu técnica y ejecutas las piezas musicales.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-2">Como Cocinar</h3>
                <p className="text-gray-600">Diagnosticas tus ingredientes, alineas la receta, navegas por los pasos, construyes el platillo y ejecutas la presentación perfecta.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-semibold mb-2">Como Hacer Deporte</h3>
                <p className="text-gray-600">Diagnosticas tu condición física, alineas tus metas, navegas por el entrenamiento, construyes tu resistencia y ejecutas tu mejor rendimiento.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">95% de Éxito</h3>
                <p className="text-gray-600">Tasa de éxito comprobada en más de 200 transformaciones digitales</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">40% Más Rápido</h3>
                <p className="text-gray-600">Reducción promedio en tiempo de implementación vs. métodos tradicionales</p>
              </div>
              <div className="text-center">
                <div className="bg-kamdata-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">300% ROI</h3>
                <p className="text-gray-600">Retorno de inversión promedio alcanzado en el primer año</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Interactiva */}
      <section id="metodologia" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Las 5 Fases del Método DANCE
              </h2>
              <p className="text-lg text-gray-600">
                Haz clic en cada fase para explorar sus componentes en detalle
              </p>
            </div>

            {/* Navegación de Fases */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activePhase === index
                      ? `bg-gradient-to-r ${phase.color} text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activePhase === index ? 'bg-white/20' : `bg-gradient-to-r ${phase.color}`
                  }`}>
                    <span className={`text-lg font-bold ${
                      activePhase === index ? 'text-white' : 'text-white'
                    }`}>
                      {phase.letter}
                    </span>
                  </div>
                  <span>{phase.name}</span>
                </button>
              ))}
            </div>

            {/* Contenido de la Fase Activa */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${phases[activePhase].color} text-white p-8`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mr-6">
                    {phases[activePhase].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{phases[activePhase].title}</h3>
                    <p className="text-xl opacity-90">{phases[activePhase].description}</p>
                  </div>
                </div>
                
                {/* Analogía */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2">💡 Analogía:</h4>
                  <p className="opacity-90">{phases[activePhase].analogy}</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Duración estimada:</span>
                    <span className="text-lg">{phases[activePhase].duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Actividades Principales
                    </h4>
                    <ul className="space-y-3">
                      {phases[activePhase].activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-kamdata-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-xs font-semibold text-kamdata-primary">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Entregables Clave
                    </h4>
                    <ul className="space-y-3">
                      {phases[activePhase].deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flujo de Trabajo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Flujo de Trabajo Integrado
              </h2>
              <p className="text-lg text-gray-600">
                Cada fase se conecta de manera fluida con la siguiente, garantizando continuidad y coherencia
              </p>
            </div>

            <div className="relative">
              {/* Línea de conexión */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 transform -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {phases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-4 border-gray-200 rounded-lg p-6 text-center hover:border-kamdata-primary transition-colors cursor-pointer group"
                         onClick={() => setActivePhase(index)}>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <span className="text-2xl font-bold text-white">{phase.letter}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.name}</h3>
                      <p className="text-sm text-gray-600">{phase.duration}</p>
                    </div>
                    
                    {/* Flecha de conexión */}
                    {index < phases.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ¿Por Qué Elegir el Método DANCE?
              </h2>
              <p className="text-lg text-gray-600">
                Ventajas comprobadas que marcan la diferencia en tu transformación digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Resultados Medibles</h3>
                <p className="text-gray-600">Cada fase incluye métricas específicas y KPIs para medir el progreso y el impacto real.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enfoque Humano</h3>
                <p className="text-gray-600">Prioriza la gestión del cambio y la adopción por parte de las personas, no solo la tecnología.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mejora Continua</h3>
                <p className="text-gray-600">La fase de Evolución garantiza que la transformación sea sostenible y se optimice constantemente.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementación Ágil</h3>
                <p className="text-gray-600">Metodología ágil que permite ajustes rápidos y entrega de valor desde las primeras fases.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Riesgo Minimizado</h3>
                <p className="text-gray-600">Enfoque estructurado que identifica y mitiga riesgos desde el diagnóstico inicial.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-kamdata-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-kamdata-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Escalabilidad</h3>
                <p className="text-gray-600">Diseñado para crecer con tu organización y adaptarse a diferentes industrias y tamaños.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Casos de Éxito con DANCE
              </h2>
              <p className="text-lg text-gray-600">
                Organizaciones que han transformado su negocio con nuestra metodología
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-kamdata-primary">85%</div>
                  <div className="text-sm text-gray-600">Reducción en tiempo de procesos</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Empresa Manufacturera</h3>
                <p className="text-gray-600 text-sm">Transformación digital completa de procesos productivos con IoT y analytics predictivos.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-kamdata-primary">450%</div>
                  <div className="text-sm text-gray-600">Incremento en ventas online</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Retail Tradicional</h3>
                <p className="text-gray-600 text-sm">Migración exitosa al e-commerce con plataforma omnicanal y personalización IA.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-kamdata-primary">60%</div>
                  <div className="text-sm text-gray-600">Mejora en satisfacción del cliente</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Institución Financiera</h3>
                <p className="text-gray-600 text-sm">Digitalización de servicios bancarios con chatbots IA y procesos automatizados.</p>
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
              ¿Listo para Bailar la Transformación Digital?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Aplica el Método DANCE en tu organización y únete a las empresas que ya están liderando su industria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Iniciar mi Transformación
              </a>
              <a 
                href="/servicios" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MetodoDance;