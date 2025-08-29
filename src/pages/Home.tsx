import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  const servicios = [
    {
      titulo: 'Conferencias y Talleres',
      descripcion: 'Despierta tu Genio Digital',
      detalle: 'Inspira, conecta, transforma.\n\nAquí empieza el viaje.\nActivamos la mentalidad digital, despertamos la curiosidad y sembramos la visión de lo que es posible.',
      link: '/servicios',
      icono: '🎤'
    },
    {
      titulo: 'Mentorías',
      descripcion: 'Acompañamiento personalizado',
      detalle: 'Grupal e individual. Flexible, confidencial y profundo.\n\nAquí trazas tu ruta.\nDiagnosticamos tu punto de partida, alineamos tus metas y construimos paso a paso la estrategia para avanzar con propósito.',
      link: '/servicios',
      icono: '💡'
    },
    {
      titulo: 'Nexo Estratégico',
      descripcion: 'Potencia tus datos con un servicio distribuido y experto.',
      detalle: 'Aquí despegas con soporte experto.\nDiseñamos las bases con una estructura táctica y estratégica que te acompaña en la gestión de tus datos, mientras tu mantienes el control de las decisiones.\nTransformamos el caos en claridad, conectamos tus procesos clave con datos relevantes.',
      link: '/servicios/nexo-estrategico',
      icono: '🚀'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      rol: 'Directora de Operaciones',
      empresa: 'Distribuidora del Norte',
      testimonio: 'Esta experiencia me ayudó a detectar patrones que me limitan y me dio herramientas para cambiar.',
      servicio: 'Chip Digital Activado',
      foto: '/testimonials/maria-gonzalez.jpg'
    },
    {
      nombre: 'Carlos Mendoza',
      rol: 'CEO',
      empresa: 'TechStart Solutions',
      testimonio: 'Este taller me ayudó a darme cuenta de que necesito claridad y una estrategia digital para avanzar con propósito.',
      servicio: 'Despierta tu Genio Digital',
      foto: '/testimonials/carlos-mendoza.jpg'
    },
    {
      nombre: 'Ana Rodríguez',
      rol: 'Gerente de Marketing',
      empresa: 'Boutique Elegance',
      testimonio: 'Más allá del contenido, destaco el acompañamiento personalizado, las herramientas concretas que pude aplicar desde la primera sesión y la claridad para alinear mis retos con soluciones prácticas.',
      servicio: 'Mentoría Individual',
      foto: '/testimonials/ana-rodriguez.jpg'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextElement) {
      nextElement.style.display = 'block';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
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
                  Si ya estás generando datos, es momento de usarlos a tu favor. En Kamdata te damos el acompañamiento estratégico para transformar información en acción, con claridad, método y dirección.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="btn-primary text-center shadow-lg hover:shadow-xl"
                  onClick={() => {
                    // TODO: Agregar URL del test de mentalidad digital
                    alert('URL del test de mentalidad pendiente');
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

      {/* ¿Por qué elegir Kamdata? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir <span className="text-kamdata-primary">Kamdata</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos habilitadores estratégicos. Te enseñamos a navegar el mundo de los datos con autonomía y confianza, a través de nuestros servicios de mentoría y nexo estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
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
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-kamdata-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float inline-block" style={{ animationDelay: `${index * 0.1}s` }}>
                    {servicio.icono}
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

      {/* Metodología DANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            El Método <span className="text-kamdata-primary">DANCE</span>
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Cada decisión estratégica parte de una buena pregunta.
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            En Kamdata desarrollamos el Método DANCE®, una metodología práctica y
            comprobada que ha guiado a decenas de empresarios, profesionistas y líderes de
            equipo a tomar decisiones más claras, alineadas y sostenibles a partir de sus datos.
          </p>

          {/* Lista de pasos DANCE */}
          <div className="space-y-6 mb-12 max-w-2xl mx-auto">
            {/* D - Distingue */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                D
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Distingue</h3>
                <p className="text-gray-600">¿Qué necesito resolver realmente?</p>
              </div>
            </div>

            {/* A - Alinea */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                A
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Alinea</h3>
                <p className="text-gray-600">¿Mi información está conectada con mis objetivos?</p>
              </div>
            </div>

            {/* N - Navega */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                N
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Navega</h3>
                <p className="text-gray-600">¿Cómo sabré si voy por buen camino?</p>
              </div>
            </div>

            {/* C - Construye */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                C
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Construye</h3>
                <p className="text-gray-600">¿Qué soluciones simples puedo implementar?</p>
              </div>
            </div>

            {/* E - Ejecuta */}
            <div className="flex items-center text-left">
              <div className="w-16 h-16 bg-kamdata-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">
                E
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Ejecuta</h3>
                <p className="text-gray-600">¿Cómo convierto esto en un hábito estratégico?</p>
              </div>
            </div>
          </div>

          {/* Botón CTA */}
          <Link
            to="/metodo-dance"
            className="inline-flex items-center px-8 py-4 bg-kamdata-accent text-white font-bold rounded-xl hover:bg-kamdata-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Conoce el Método Completo
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">HISTORIAS KAMDATA</h2>
            <p className="text-lg text-gray-600">Resultados reales de empresas y profesionales que han transformado su mentalidad digital y la forma de trabajar con datos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
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
            <Link
              to="/historias-kamdata"
              className="inline-flex items-center px-6 py-3 border-2 border-kamdata-secondary text-kamdata-secondary font-semibold rounded-lg hover:bg-kamdata-secondary hover:text-white transition-colors"
            >
              Ver más historias Kamdata
            </Link>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Nuestros Aliados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Instituto de Innovación */}
              <div className="text-center">
                <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/instituto-innovacion.png"
                    alt="Instituto de Innovación"
                    className="w-48 h-24 object-contain"
                    onError={handleImageError}
                  />
                  <span className="text-6xl hidden">🏢</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Instituto de Innovación</p>
              </div>

              {/* Casa del Emprendimiento */}
              <div className="text-center">
                <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/casa-emprendimiento.png"
                    alt="Casa del Emprendimiento"
                    className="w-48 h-24 object-contain"
                    onError={handleImageError}
                  />
                  <span className="text-6xl hidden">🏠</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Casa del Emprendimiento</p>
              </div>

              {/* Treehouse */}
              <div className="text-center">
                <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/treehouse.png"
                    alt="Treehouse"
                    className="w-48 h-24 object-contain"
                    onError={handleImageError}
                  />
                  <span className="text-6xl hidden">🌳</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Treehouse</p>
              </div>

              {/* E-vior Developments */}
              <div className="text-center">
                <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/e-vior-developments.png"
                    alt="E-vior Developments"
                    className="w-48 h-24 object-contain"
                    onError={handleImageError}
                  />
                  <span className="text-6xl hidden">💻</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">E-vior Developments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
                // TODO: Agregar URL del test de mentalidad digital
                alert('URL del test de mentalidad pendiente');
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
    </Layout>
  );
};

export default Home;