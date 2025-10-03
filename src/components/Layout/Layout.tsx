import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'kamdata - Convierte la gestión de datos en un hábito estratégico',
  description = 'Te ayudamos a tomar decisiones con claridad y rumbo, sin complicaciones técnicas. Mentoría y formación práctica para convertir datos en decisiones estratégicas.',
  keywords = 'kamdata, datos, mentoría, estrategia, decisiones, método DANCE, transformación digital, PyMEs',
  ogImage = '/og-image-kamdata.jpg'
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "kamdata",
            "description": "Empresa de mentoría que habilita a profesionales y líderes de PyMEs para convertir sus datos en decisiones claras, sostenibles y estratégicas",
            "url": "https://kamdata.com.mx",
            "logo": "https://kamdata.com.mx/logo-kamdata.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+52-56-6161-0375",
              "contactType": "customer service",
              "email": "informes@kamdata.com.mx"
            },
            "sameAs": [
              "https://wa.me/525661610375"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;