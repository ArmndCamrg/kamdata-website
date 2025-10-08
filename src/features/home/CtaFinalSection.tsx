import React from 'react';
import { Link } from 'react-router-dom';

const CtaFinalSection: React.FC = () => {
  return (
    <section className="py-20 gradient-kamdata relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
          ¿Listo para transformar tus datos en decisiones estratégicas?
        </h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-4xl mx-auto border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Empieza por lo más importante: tu mentalidad.
          </h3>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Descubre con un test gratuito qué tan preparado estás para aprovechar el poder de
            los datos en tu negocio o equipo.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="inline-flex items-center px-10 py-4 bg-white text-kamdata-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
            onClick={() => {
              window.open('https://www.kamdata.click', '_blank');
            }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Haz el Test de Mentalidad Digital
          </button>
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-kamdata-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Contáctanos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;