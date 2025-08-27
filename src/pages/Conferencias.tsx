import React from 'react';
import Layout from '../components/Layout/Layout';

const Conferencias: React.FC = () => {
  return (
    <Layout
      title="Conferencias - Despierta tu Genio Digital | Kamdata"
      description="Conferencias inspiradoras que transforman la mentalidad hacia los datos. Aprende a convertir información en decisiones estratégicas con el Método DANCE de Kamdata."
      keywords="conferencias kamdata, despierta tu genio digital, transformacion digital, metodo dance, datos estrategicos, conferencias empresariales"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary/10 to-kamdata-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conferencias <span className="text-kamdata-primary">Kamdata</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-kamdata-accent font-semibold mb-6">
              "Despierta tu Genio Digital"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conferencias inspiradoras que transforman la mentalidad hacia los datos y 
              despiertan el potencial estratégico de tu organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/525661610375?text=Hola%2C%20me%20interesa%20contratar%20una%20conferencia%20Kamdata" 
                className="bg-kamdata-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-kamdata-primary/90 transition-colors"
              >
                Solicitar Conferencia
              </a>
              <a 
                href="#programa" 
                className="border-2 border-kamdata-primary text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-kamdata-primary hover:text-white transition-colors"
              >
                Ver Programa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transforma la Mentalidad de tu Equipo
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestras conferencias van más allá de la teoría. Inspiramos a los participantes 
                a ver los datos como aliados estratégicos, no como obstáculos técnicos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-kamdata-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inspiración Práctica</h4>
                    <p className="text-gray-600 text-sm">Casos reales y ejemplos aplicables a cualquier industria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-kamdata-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Método DANCE</h4>
                    <p className="text-gray-600 text-sm">Introducción al framework exclusivo de Kamdata</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-kamdata-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Interactividad</h4>
                    <p className="text-gray-600 text-sm">Dinámicas que involucran a toda la audiencia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">¿Para quién es ideal?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kamdata-accent rounded-full mr-3"></span>
                  Equipos directivos y gerenciales
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kamdata-accent rounded-full mr-3"></span>
                  Profesionales de PyMEs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kamdata-accent rounded-full mr-3"></span>
                  Organizaciones en transformación digital
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kamdata-accent rounded-full mr-3"></span>
                  Empresas que buscan cultura data-driven
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programa de la Conferencia */}
      <section id="programa" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Programa de la Conferencia
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una experiencia de 90 minutos que transformará la perspectiva de tu equipo sobre los datos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Despertar</h4>
                <p className="text-sm text-gray-500">20 minutos</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• El mito de la complejidad de los datos</li>
                <li>• Casos de éxito inspiradores</li>
                <li>• El costo de no decidir con datos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Método DANCE</h4>
                <p className="text-sm text-gray-500">45 minutos</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Diagnostica tu situación actual</li>
                <li>• Alinea objetivos con datos</li>
                <li>• Navega hacia soluciones prácticas</li>
                <li>• Construye sistemas sostenibles</li>
                <li>• Ejecuta con confianza</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-kamdata-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Acción</h4>
                <p className="text-sm text-gray-500">25 minutos</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Plan de acción personalizado</li>
                <li>• Herramientas prácticas</li>
                <li>• Primeros pasos concretos</li>
                <li>• Q&A interactivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Modalidades Disponibles
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Presencial</h4>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• Experiencia completa e interactiva</p>
                <p className="text-gray-600">• Dinámicas grupales</p>
                <p className="text-gray-600">• Material físico incluido</p>
                <p className="text-gray-600">• Networking post-conferencia</p>
              </div>
              <div className="text-2xl font-bold text-kamdata-primary mb-2">Desde $25,000 MXN</div>
              <p className="text-sm text-gray-500">Hasta 50 participantes</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Virtual</h4>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• Plataforma interactiva</p>
                <p className="text-gray-600">• Breakout rooms</p>
                <p className="text-gray-600">• Material digital descargable</p>
                <p className="text-gray-600">• Grabación incluida</p>
              </div>
              <div className="text-2xl font-bold text-kamdata-primary mb-2">Desde $18,000 MXN</div>
              <p className="text-sm text-gray-500">Hasta 100 participantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-kamdata-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            ¿Listo para Despertar el Genio Digital de tu Equipo?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos para personalizar una conferencia según las necesidades de tu organización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/525661610375?text=Hola%2C%20me%20interesa%20contratar%20una%20conferencia%20Kamdata" 
              className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotización
            </a>
            <a 
              href="/contacto" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
            >
              Más Información
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conferencias;