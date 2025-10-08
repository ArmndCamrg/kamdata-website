import React from 'react';
import { Link } from 'react-router-dom';

// Definimos los "tipos" de datos que espera nuestro componente
interface Testimonio {
  testimonio: string;
  servicio: string;
}

interface TestimoniosSectionProps {
  testimonios: Testimonio[];
}

const TestimoniosSection: React.FC<TestimoniosSectionProps> = ({ testimonios }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Historias kamdata</h2>
          <p className="text-lg text-gray-600">Resultados reales de empresas y profesionales que han transformado su mentalidad digital y la forma de trabajar con datos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <blockquote className="text-gray-700 italic mb-4 flex-grow">
                "{testimonio.testimonio}"
              </blockquote>
              <div className="flex items-center text-sm mt-auto">
                <span className="text-kamdata-secondary mr-1">📌</span>
                <span className="font-medium text-gray-600">Servicio aplicado:</span>
                <span className="ml-1 text-kamdata-primary font-semibold">{testimonio.servicio}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/historias-kamdata" className="inline-flex items-center px-6 py-3 border-2 border-kamdata-secondary text-kamdata-secondary font-semibold rounded-lg hover:bg-kamdata-secondary hover:text-white transition-colors">
            Ver más historias Kamdata
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;