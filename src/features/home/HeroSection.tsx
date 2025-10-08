import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-kamdata-soft py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-kamdata-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-kamdata-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-kamdata-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
              Convierte la gestión de datos en un{' '}
              <span className="text-kamdata-primary">hábito estratégico</span>
            </h1>
            <div className="mb-6">
              <p className="text-lg text-gray-500 mb-2">Tomar decisiones con datos no tiene por qué ser complicado</p>
              <p className="text-xl text-gray-600 leading-relaxed">
                En kamdata te damos el acompañamiento estratégico para transformar información en acción, con claridad, método y dirección.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary text-center shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.open('https://www.kamdata.click', '_blank');
                }}
              >
                Comienza aquí
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-kamdata-primary text-kamdata-primary font-semibold rounded-lg hover:bg-kamdata-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto relative">
                {/* Círculo principal con metodología DANCE */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-2xl">
                  {/* Círculo interior azul con texto DANCE */}
                  <div className="absolute inset-8 bg-kamdata-accent rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                    <div className="text-4xl font-bold font-montserrat tracking-wider">DANCE</div>
                    <div className="text-lg font-medium mt-2">Metodología</div>
                  </div>

                  {/* 4 puntos giratorios en el borde del círculo */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kamdata-primary rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 bg-kamdata-secondary rounded-full shadow-lg"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kamdata-secondary rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 h-6 bg-kamdata-primary rounded-full shadow-lg"></div>
                  </div>
                </div>

                {/* Puntos externos flotantes */}
                <div className="absolute -top-4 -left-4 w-4 h-4 bg-kamdata-primary rounded-full animate-float shadow-lg"></div>
                <div className="absolute -top-8 right-8 w-3 h-3 bg-kamdata-secondary rounded-full animate-float shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 -right-8 w-4 h-4 bg-kamdata-accent rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 -right-4 w-3 h-3 bg-kamdata-primary rounded-full animate-float shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute -bottom-6 left-8 w-4 h-4 bg-kamdata-secondary rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            <div className="absolute inset-0 gradient-kamdata rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;