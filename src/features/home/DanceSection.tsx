import React from 'react';
import { Link } from 'react-router-dom';

const DanceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          El Método <span className="text-kamdata-primary">DANCE</span>
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          Cada decisión estratégica parte de una buena pregunta.
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          En kamdata desarrollamos el Método DANCE®, una metodología práctica y
          comprobada que ha guiado a decenas de empresarios, profesionistas y líderes de
          equipo a tomar decisiones más claras, alineadas y sostenibles a partir de sus datos.
        </p>
        <div className="space-y-6 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center text-left">
            <img src="/assets/icons/dance-d.png" alt="Icono para Distingue del Método DANCE" className="w-16 h-16 mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Distingue</h3>
              <p className="text-gray-600">¿Qué necesito resolver realmente?</p>
            </div>
          </div>
          <div className="flex items-center text-left">
            <img src="/assets/icons/dance-a.png" alt="Icono para Alinea del Método DANCE" className="w-16 h-16 mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Alinea</h3>
              <p className="text-gray-600">¿Mi información está conectada con mis objetivos?</p>
            </div>
          </div>
          <div className="flex items-center text-left">
            <img src="/assets/icons/dance-n.png" alt="Icono para Navega del Método DANCE" className="w-16 h-16 mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Navega</h3>
              <p className="text-gray-600">¿Cómo sabré si voy por buen camino?</p>
            </div>
          </div>
          <div className="flex items-center text-left">
            <img src="/assets/icons/dance-c.png" alt="Icono para Construye del Método DANCE" className="w-16 h-16 mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Construye</h3>
              <p className="text-gray-600">¿Qué soluciones simples puedo implementar?</p>
            </div>
          </div>
          <div className="flex items-center text-left">
            <img src="/assets/icons/dance-e.png" alt="Icono para Ejecuta del Método DANCE" className="w-16 h-16 mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Ejecuta</h3>
              <p className="text-gray-600">¿Cómo convierto esto en un hábito estratégico?</p>
            </div>
          </div>
        </div>
        <Link to="/metodo-dance" className="inline-flex items-center px-8 py-4 bg-kamdata-accent text-white font-bold rounded-xl hover:bg-kamdata-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          Conoce el Método Completo
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default DanceSection;