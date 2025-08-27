import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  const beneficios = [
    {
      icono: '🎯',
      titulo: 'Gestión de datos como hábito',
      descripcion: 'Convertimos el análisis de datos en una práctica natural y sostenible para tu equipo'
    },
    {
      icono: '💡',
      titulo: 'Mentalidad digital práctica',
      descripcion: 'Desarrollamos una perspectiva digital aplicable sin complicaciones técnicas'
    },
    {
      icono: '⚡',
      titulo: 'Herramientas ágiles y aplicables',
      descripcion: 'Implementamos soluciones que se adaptan a tu realidad y recursos actuales'
    },
    {
      icono: '🤖',
      titulo: 'IA co-creativa no invasiva',
      descripcion: 'Integramos inteligencia artificial como aliada, respetando tu autonomía'
    },
    {
      icono: '🧭',
      titulo: 'Acompañamiento estratégico',
      descripcion: 'Te guiamos en el proceso sin hacer el trabajo por ti'
    }
  ];

  const servicios = [
    {
      titulo: 'Conferencias',
      descripcion: 'Despierta tu Genio Digital',
      detalle: 'Inspira, conecta, transforma',
      link: '/servicios/conferencias',
      icono: '🎤'
    },
    {
      titulo: 'Talleres',
      descripcion: 'Aprende haciendo. Avanza con claridad',
      detalle: 'Formación práctica y aplicable',
      link: '/servicios/talleres',
      icono: '🛠️'
    },
    {
      titulo: 'Mentoría Grupal',
      descripcion: 'Programa de 7 semanas',
      detalle: 'Comunidad, estructura, resultados',
      link: '/servicios/mentoria-grupal',
      icono: '👥'
    },
    {
      titulo: 'Mentoría Individual',
      descripcion: 'Acompañamiento 1:1',
      detalle: 'Flexible, confidencial y profundo',
      link: '/servicios/mentoria-individual',
      icono: '🎯'
    },
    {
      titulo: 'Nexo Estratégico',
      descripcion: 'Servicio especializado',
      detalle: 'Diagnóstico y Fase 0',
      link: '/servicios/nexo-estrategico',
      icono: '🚀'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      rol: 'Directora de Operaciones',
      empresa: 'Distribuidora del Norte',
      testimonio: 'Kamdata nos ayudó a convertir datos dispersos en decisiones claras. Aumentamos nuestra eficiencia operativa en un 40%.',
      foto: '/testimonials/maria-gonzalez.jpg'
    },
    {
      nombre: 'Carlos Mendoza',
      rol: 'CEO',
      empresa: 'TechStart Solutions',
      testimonio: 'El Método DANCE transformó nuestra relación con los datos. Ahora podemos predecir comportamientos de clientes.',
      foto: '/testimonials/carlos-mendoza.jpg'
    },
    {
      nombre: 'Ana Rodríguez',
      rol: 'Gerente de Marketing',
      empresa: 'Boutique Elegance',
      testimonio: 'Aprendimos a leer nuestros datos de ventas. Nuestras campañas ahora son 60% más efectivas.',
      foto: '/testimonials/ana-rodriguez.jpg'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-kamdata-soft py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-kamdata-primary/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-kamdata-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-kamdata-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
                Convierte la gestión de datos en un{' '}
                <span className="text-kamdata-primary">hábito estratégico</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Te ayudamos a tomar decisiones con claridad y rumbo, sin complicaciones técnicas. 
                Mentoría y formación práctica para convertir datos en decisiones estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  className="btn-primary text-center shadow-lg hover:shadow-xl"
                >
                  Agenda tu Diagnóstico Gratuito
                </Link>
                <Link
                  to="/metodo-dance"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-kamdata-primary text-kamdata-primary font-semibold rounded-lg hover:bg-kamdata-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Descubre el Método DANCE
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Brújula animada mejorada */}
                  <div className="absolute inset-0 border-4 border-kamdata-primary rounded-full animate-spin-slow shadow-lg">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-kamdata-primary"></div>
                  </div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-xl flex items-center justify-center animate-pulse-glow">
                    <span className="text-5xl">🧭</span>
                  </div>
                  {/* Puntos conectores animados mejorados */}
                  <div className="absolute -top-4 -right-4 w-4 h-4 bg-kamdata-accent rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-kamdata-secondary rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-kamdata-primary rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/4 -left-6 w-3 h-3 bg-kamdata-accent rounded-full animate-pulse shadow-lg" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 gradient-kamdata rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir <span className="text-kamdata-primary">Kamdata</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No somos consultores tradicionales. Somos habilitadores que te enseñamos a navegar 
              el mundo de los datos con autonomía y confianza.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 card-hover border border-gray-100">
                <div className="text-5xl mb-6 animate-float" style={{animationDelay: `${index * 0.2}s`}}>{beneficio.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">{beneficio.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{beneficio.descripcion}</p>
                <div className="mt-4 w-12 h-1 bg-kamdata-primary mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Nuestros Servicios</h2>
            <p className="text-xl text-kamdata-primary font-semibold mb-4 italic">
              "No navegamos por ti. Te damos la brújula y te enseñamos cómo."
            </p>
            <div className="w-24 h-1 bg-kamdata-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <Link
                key={index}
                to={servicio.link}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hard transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-kamdata-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: `${index * 0.1}s`}}>
                    {servicio.icono}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{servicio.titulo}</h3>
                  <p className="text-kamdata-primary font-semibold mb-3 text-lg">{servicio.descripcion}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{servicio.detalle}</p>
                  <div className="flex items-center text-kamdata-primary group-hover:text-kamdata-secondary transition-colors font-semibold">
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

      {/* Teaser Método DANCE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                El Método <span className="text-kamdata-primary">DANCE</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro framework exclusivo de 5 pasos que transforma la manera en que 
                tu empresa gestiona y utiliza sus datos para tomar decisiones estratégicas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kamdata-primary text-white rounded-full flex items-center justify-center font-bold mr-3">D</div>
                  <span className="font-semibold">Diagnostica</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kamdata-primary text-white rounded-full flex items-center justify-center font-bold mr-3">A</div>
                  <span className="font-semibold">Alinea</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kamdata-primary text-white rounded-full flex items-center justify-center font-bold mr-3">N</div>
                  <span className="font-semibold">Navega</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kamdata-primary text-white rounded-full flex items-center justify-center font-bold mr-3">C</div>
                  <span className="font-semibold">Construye</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-kamdata-primary text-white rounded-full flex items-center justify-center font-bold mr-3">E</div>
                  <span className="font-semibold">Ejecuta</span>
                </div>
              </div>
              <Link
                to="/metodo-dance"
                className="inline-flex items-center px-6 py-3 bg-kamdata-accent text-white font-semibold rounded-lg hover:bg-kamdata-accent/90 transition-colors"
              >
                Descubre el Método Completo
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/metodo-dance-preview.jpg" 
                alt="Método DANCE" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-gray-600">Resultados reales de empresas que han transformado sus datos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonio.foto} 
                    alt={testimonio.nombre}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonio.nombre}</h4>
                    <p className="text-sm text-kamdata-primary">{testimonio.rol}</p>
                    <p className="text-sm text-gray-600">{testimonio.empresa}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonio.testimonio}"
                </blockquote>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/historias-kamdata"
              className="inline-flex items-center px-6 py-3 border-2 border-kamdata-secondary text-kamdata-secondary font-semibold rounded-lg hover:bg-kamdata-secondary hover:text-white transition-colors"
            >
              Ver Más Historias de Éxito
              <span className="ml-2 text-xs bg-kamdata-secondary/10 text-kamdata-secondary px-2 py-1 rounded-full">
                Próximamente
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestros Aliados</h3>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <img src="/aliados/proempleo.png" alt="ProEmpleo" className="h-8" />
              <img src="/aliados/instituto-innovacion.png" alt="Instituto de Innovación" className="h-8" />
              <img src="/aliados/dama-mexico.png" alt="DAMA México" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-kamdata relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            ¿Listo para transformar tus datos en decisiones estratégicas?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comienza tu transformación digital con un diagnóstico gratuito y descubre el poder de la gestión estratégica de datos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contacto"
              className="inline-flex items-center px-10 py-4 bg-white text-kamdata-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agenda tu Diagnóstico Gratuito
            </Link>
            <Link
              to="/metodo-dance"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-kamdata-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Conoce el Método DANCE
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;