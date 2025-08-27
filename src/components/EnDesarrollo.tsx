import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout/Layout';

interface EnDesarrolloProps {
  titulo: string;
  descripcion: string;
  icono: string;
  colorAccent?: string;
}

const EnDesarrollo: React.FC<EnDesarrolloProps> = ({ 
  titulo, 
  descripcion, 
  icono, 
  colorAccent = 'kamdata-primary' 
}) => {
  return (
    <Layout
      title={`${titulo} - Próximamente | Kamdata`}
      description={`${descripcion} - Esta sección estará disponible próximamente en el sitio web de Kamdata.`}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icono animado */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-kamdata-primary/10 rounded-full mb-6 animate-pulse-glow">
              <span className="text-4xl">{icono}</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            {titulo}
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {descripcion}
          </p>

          {/* Estado de desarrollo */}
          <div className="inline-flex items-center px-6 py-3 bg-kamdata-accent/10 text-kamdata-accent rounded-full mb-8">
            <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="font-semibold">En desarrollo</span>
          </div>

          {/* Mensaje motivacional */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Estamos trabajando en algo increíble
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está desarrollando esta sección para ofrecerte la mejor experiencia. 
              Mientras tanto, puedes explorar nuestros servicios y conocer más sobre el Método DANCE.
            </p>
            
            {/* Barra de progreso simulada */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-kamdata-primary h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
            <p className="text-sm text-gray-500">75% completado</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios"
              className="inline-flex items-center px-8 py-3 bg-kamdata-primary text-white font-semibold rounded-lg hover:bg-kamdata-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Explorar Servicios
            </Link>
            <Link
              to="/metodo-dance"
              className="inline-flex items-center px-8 py-3 border-2 border-kamdata-accent text-kamdata-accent font-semibold rounded-lg hover:bg-kamdata-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Conocer Método DANCE
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Contacto */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              ¿Tienes alguna pregunta o sugerencia para esta sección?
            </p>
            <Link
              to="/contacto"
              className="text-kamdata-primary hover:text-kamdata-secondary font-semibold transition-colors"
            >
              Contáctanos →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnDesarrollo;