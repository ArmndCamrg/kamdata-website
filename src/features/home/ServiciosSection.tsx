import React from 'react';
import { Link } from 'react-router-dom';

// Definimos el "tipo" de datos que espera nuestro componente
interface Servicio {
  titulo: string;
  descripcion: string;
  detalle: string;
  link: string;
  icono: string;
}

interface ServiciosSectionProps {
  servicios: Servicio[];
}

const ServiciosSection: React.FC<ServiciosSectionProps> = ({ servicios }) => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Nuestros Servicios</h2>
          <p className="text-xl text-kamdata-primary font-semibold mb-4 italic">
            "Te damos la brújula, te enseñamos a leer el terreno para trazar la mejor ruta y te acompañamos en el camino."
          </p>
          <div className="w-24 h-1 bg-kamdata-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servicios.map((servicio, index) => (
            <Link
              key={index}
              to={servicio.link}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hard transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-kamdata-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 h-20 flex items-center justify-center">
                  <img 
                    src={servicio.icono} 
                    alt={`Icono para ${servicio.titulo}`}
                    className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{servicio.titulo}</h3>
                <p className="text-kamdata-primary font-semibold mb-3 text-lg">{servicio.descripcion}</p>
                <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">{servicio.detalle}</p>
                <div className="flex items-center justify-center text-kamdata-primary group-hover:text-kamdata-secondary transition-colors font-semibold">
                  Conocer más
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
