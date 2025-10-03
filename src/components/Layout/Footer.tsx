import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                className="h-8 w-auto brightness-0 invert" 
                src="/public/assets/icons/kamdata-logo-hor-white.png" // <-- RUTA CORREGIDA
                alt="Kamdata logo blanco principal horizontal" // <-- Texto 'alt' un poco mas descriptivo 
              />
              {/*<span className="ml-4 text-xl font-bold text-gray-900 font-montserrat">Kamdata</span>*/}
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              Kamdata es una empresa de mentoría que habilita a profesionales y líderes de PyMEs 
              para convertir sus datos en decisiones claras, sostenibles y estratégicas.
            </p>
            <p className="text-kamdata-primary font-semibold">
              "Convierte la gestión de datos en un hábito estratégico"
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kamdata-primary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-kamdata-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/metodo-dance" className="text-gray-200 hover:text-kamdata-primary transition-colors">
                  Método DANCE
                </Link>
              </li>
              <li>
                <Link to="/sobre-kamdata" className="text-gray-200 hover:text-kamdata-primary transition-colors">
                  Sobre Kamdata
                </Link>
              </li>
              <li>
                <Link to="/historias-kamdata" className="text-gray-200 hover:text-kamdata-primary transition-colors">
                  Historias de Éxito
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-kamdata-primary transition-colors">
                  Blog/Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kamdata-primary">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-200">
                <span className="font-medium">Email:</span><br />
                <a 
                  href="mailto:informes@kamdata.com.mx" 
                  className="text-kamdata-primary hover:text-kamdata-secondary transition-colors"
                >
                  informes@kamdata.com.mx
                </a>
              </p>
              <p className="text-gray-200">
                <span className="font-medium">Teléfono:</span><br />
                <a 
                  href="tel:+525661610375" 
                  className="text-kamdata-primary hover:text-kamdata-secondary transition-colors"
                >
                  +52 56 6161 0375
                </a>
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/525661610375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Business
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Kamdata. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;