import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      submenu: [
        { name: 'Conferencias', href: '/servicios/conferencias' },
        { name: 'Talleres', href: '/servicios/talleres' },
        { name: 'Mentoría Grupal', href: '/servicios/mentoria-grupal' },
        { name: 'Mentoría Individual', href: '/servicios/mentoria-individual' },
        { name: 'Nexo Estratégico', href: '/servicios/nexo-estrategico' }
      ]
    },
    { name: 'El Método DANCE', href: '/metodo-dance' },
    { name: 'Sobre Kamdata', href: '/sobre-kamdata' },
    { name: 'Historias Kamdata', href: '/historias-kamdata' },
    { name: 'Blog/Recursos', href: '/blog' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                className="logo-kamdata-large" 
                src="/assets/logos/kamdata-logo-hor.png" // <-- RUTA CORREGIDA
                alt="Kamdata Logo horizontal amarillo principal" // <-- Texto 'alt' un poco mas descriptivo
              />
              {/*<span className="ml-4 text-xl font-bold text-gray-900 font-montserrat">Kamdata</span>*/}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-kamdata-primary bg-kamdata-primary/10'
                        : 'text-gray-700 hover:text-kamdata-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Submenu for Servicios */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-kamdata-primary/10 hover:text-kamdata-primary"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kamdata-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kamdata-primary"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'text-kamdata-primary bg-kamdata-primary/10'
                        : 'text-gray-700 hover:text-kamdata-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile submenu */}
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-kamdata-primary hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;