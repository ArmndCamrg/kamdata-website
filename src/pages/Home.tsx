import React from 'react';
// Ya no necesitamos 'Link' aquí, lo quitamos para limpiar el warning.
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import HeroSection from '../features/home/HeroSection';
import ServiciosSection from '../features/home/ServiciosSection';
import DanceSection from '../features/home/DanceSection';
import TestimoniosSection from '../features/home/TestimoniosSection';
import AliadosSection from '../features/home/AliadosSection';
import CtaFinalSection from '../features/home/CtaFinalSection';

const Home: React.FC = () => {
  // --- DATA ---
  // (Esta data se moverá a un 'store' en una futura mejora)
  const servicios = [
    {
      titulo: 'Conferencias y Talleres',
      descripcion: 'Despierta tu Genio Digital',
      detalle: 'Inspira, conecta, transforma.\n\nAquí empieza el viaje.\nActivamos la mentalidad digital, despertamos la curiosidad y sembramos la visión de lo que es posible.',
      link: '/servicios',
      icono: '/assets/icons/servicio-conferencias.png'
    },
    {
      titulo: 'Mentorías',
      descripcion: 'Acompañamiento personalizado',
      detalle: 'Grupal e individual. Flexible, confidencial y profundo.\n\nAquí trazas tu ruta.\nDiagnosticamos tu punto de partida, alineamos tus metas y construimos paso a paso la estrategia para avanzar con propósito.',
      link: '/servicios',
      icono: '/assets/icons/servicio-mentorias.png'
    },
    {
      titulo: 'Nexo Estratégico',
      descripcion: 'Potencia tus datos con un servicio distribuido y experto.',
      detalle: 'Aquí despegas con soporte experto.\nDiseñamos las bases con una estructura táctica y estratégica que te acompaña en la gestión de tus datos, mientras tu mantienes el control de las decisiones.\nTransformamos el caos en claridad, conectamos tus procesos clave con datos relevantes.',
      link: '/servicios/nexo-estrategico',
      icono: '/assets/icons/servicio-nexo.png'
    }
  ];

  const testimonios = [
    {
      testimonio: 'Esta experiencia me ayudó a detectar patrones que me limitan y me dio herramientas para cambiar.',
      servicio: 'Chip Digital Activado',
    },
    {
      testimonio: 'Este taller me ayudó a darme cuenta de que necesito claridad y una estrategia digital para avanzar con propósito.',
      servicio: 'Despierta tu Genio Digital',
    },
    {
      testimonio: 'Más allá del contenido, destaco el acompañamiento personalizado, las herramientas concretas que pude aplicar desde la primera sesión y la claridad para alinear mis retos con soluciones prácticas.',
      servicio: 'Mentoría Individual',
    }
  ];
  // La función 'handleImageError' ya no es necesaria aquí, la movimos a AliadosSection.tsx
  // --- FIN DE LA DATA ---

  return (
    <Layout>
      <Helmet>
        <title>Kamdata | Gestión y Análisis de Datos en México</title>
        <meta name="description" content="Transformamos datos en decisiones estratégicas. Kamdata ofrece servicios expertos de consultoría, análisis y visualización de datos para potenciar tu negocio." />
        <meta property="og:title" content="Kamdata | Gestión y Análisis de Datos" />
        <meta property="og:description" content="Convertimos tus datos en un hábito estratégico." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kamdata.com.mx" />
        <meta property="og:image" content="/assets/logos/kamdata-logo-hor.png" />
      </Helmet>
      
      {/* Componentes de Sección */}
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir <span className="text-kamdata-primary">kamdata</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos habilitadores estratégicos. Te enseñamos a navegar el mundo de los datos con autonomía y confianza, a través de nuestros servicios de mentoría y nexo estratégico.
            </p>
          </div>
        </div>
      </section>

      <ServiciosSection servicios={servicios} />
      <DanceSection />
      <TestimoniosSection testimonios={testimonios} />
      <AliadosSection />
      <CtaFinalSection />
    </Layout>
  );
};

export default Home;