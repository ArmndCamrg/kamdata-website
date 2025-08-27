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
      titulo: 'Conferencias y Talleres',
      descripcion: 'Despierta tu Genio Digital',
      detalle: 'Inspira, conecta, transforma. Formación práctica y aplicable',
      link: '/servicios',
      icono: '🎤'
    },
    {
      titulo: 'Mentorías',
      descripcion: 'Acompañamiento personalizado',
      detalle: 'Grupal e individual. Flexible, confidencial y profundo',
      link: '/servicios',
      icono: '👥'
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
                  {/* Círculo principal con metodología DANCE */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-2xl">
                    {/* Círculo interior azul con texto DANCE */}
                    <div className="absolute inset-8 bg-kamdata-accent rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                      <div className="text-4xl font-bold font-montserrat tracking-wider">DANCE</div>
                      <div className="text-lg font-medium mt-2">Metodología</div>
                    </div>
                    
                    {/* 4 puntos giratorios en el borde del círculo */}
                    <div className="absolute inset-0 animate-spin-slow">
                      {/* Punto amarillo - arriba */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kamdata-primary rounded-full shadow-lg"></div>
                      {/* Punto rojo - derecha */}
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 bg-kamdata-secondary rounded-full shadow-lg"></div>
                      {/* Punto rojo - abajo */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kamdata-secondary rounded-full shadow-lg"></div>
                      {/* Punto amarillo - izquierda */}
                      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 h-6 bg-kamdata-primary rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* Puntos externos flotantes */}
                  <div className="absolute -top-4 -left-4 w-4 h-4 bg-kamdata-primary rounded-full animate-float shadow-lg"></div>
                  <div className="absolute -top-8 right-8 w-3 h-3 bg-kamdata-secondary rounded-full animate-float shadow-lg" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/3 -right-8 w-4 h-4 bg-kamdata-accent rounded-full animate-float shadow-lg" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-8 -right-4 w-3 h-3 bg-kamdata-primary rounded-full animate-float shadow-lg" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute -bottom-6 left-8 w-4 h-4 bg-kamdata-secondary rounded-full animate-float shadow-lg" style={{animationDelay: '2s'}}></div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicios.map((servicio, index) => (
              <Link
                key={index}
                to={servicio.link}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hard transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-kamdata-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float inline-block" style={{animationDelay: `${index * 0.1}s`}}>
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

      {/* Metodología DANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            El Método <span className="text-kamdata-primary">DANCE</span>
          </h2>
          
          {/* Descripción */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nuestro framework exclusivo de 5 pasos que transforma la manera en que 
            tu empresa gestiona y utiliza sus datos para tomar decisiones estratégicas.
          </p>

          {/* Lista de pasos DANCE */}
          <div className="space-y-6 mb-12 max-w-2xl mx-auto">
            {/* D - Diagnostica */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                D
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Diagnostica</h3>
                <p className="text-gray-600">Evaluamos el estado actual de tus datos y procesos de decisión</p>
              </div>
            </div>

            {/* A - Alinea */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                A
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Alinea</h3>
                <p className="text-gray-600">Sincronizamos objetivos de negocio con capacidades de datos</p>
              </div>
            </div>

            {/* N - Navega */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                N
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Navega</h3>
                <p className="text-gray-600">Exploramos y analizamos datos para descubrir insights valiosos</p>
              </div>
            </div>

            {/* C - Construye */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                C
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Construye</h3>
                <p className="text-gray-600">Desarrollamos soluciones y estrategias basadas en datos</p>
              </div>
            </div>

            {/* E - Ejecuta */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                E
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Ejecuta</h3>
                <p className="text-gray-600">Implementamos y monitoreamos las soluciones para resultados sostenibles</p>
              </div>
            </div>
          </div>

          {/* Botón CTA */}
          <Link
            to="/metodo-dance"
            className="inline-flex items-center px-8 py-4 bg-kamdata-accent text-white font-bold rounded-xl hover:bg-kamdata-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Descubre el Método Completo
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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