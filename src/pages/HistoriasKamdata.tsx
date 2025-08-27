import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';

interface CasoExito {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientPhoto: string;
  testimonialText: string;
  beforeSituation: string;
  afterResults: string;
  serviceUsed: string;
  industry: string;
  videoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

const HistoriasKamdata: React.FC = () => {
  const [casosExito, setCasosExito] = useState<CasoExito[]>([]);
  const [filtroIndustria, setFiltroIndustria] = useState<string>('todas');
  const [filtroServicio, setFiltroServicio] = useState<string>('todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Datos de ejemplo - en producción vendrían de BigQuery
    const casosEjemplo: CasoExito[] = [
      {
        id: '1',
        clientName: 'María González',
        clientRole: 'Directora de Operaciones',
        clientCompany: 'Distribuidora del Norte',
        clientPhoto: '/testimonials/maria-gonzalez.jpg',
        testimonialText: 'Antes de Kamdata, tomábamos decisiones basadas en intuición. Ahora tenemos claridad total sobre nuestros datos y hemos aumentado la eficiencia operativa en un 40%.',
        beforeSituation: 'Procesos manuales, decisiones basadas en intuición, falta de visibilidad en operaciones',
        afterResults: '40% mejora en eficiencia operativa, automatización de reportes, decisiones basadas en datos',
        serviceUsed: 'Mentoría Grupal',
        industry: 'Distribución',
        featured: true
      },
      {
        id: '2',
        clientName: 'Carlos Mendoza',
        clientRole: 'CEO',
        clientCompany: 'TechStart Solutions',
        clientPhoto: '/testimonials/carlos-mendoza.jpg',
        testimonialText: 'El Método DANCE nos ayudó a estructurar nuestros datos de clientes. Pasamos de tener información dispersa a un sistema que nos permite predecir comportamientos.',
        beforeSituation: 'Datos dispersos, sin sistema de análisis, pérdida de oportunidades comerciales',
        afterResults: 'Sistema integrado de datos, análisis predictivo, 25% aumento en retención de clientes',
        serviceUsed: 'Nexo Estratégico',
        industry: 'Tecnología',
        featured: true
      },
      {
        id: '3',
        clientName: 'Ana Rodríguez',
        clientRole: 'Gerente de Marketing',
        clientCompany: 'Boutique Elegance',
        clientPhoto: '/testimonials/ana-rodriguez.jpg',
        testimonialText: 'Kamdata nos enseñó a leer nuestros datos de ventas. Ahora sabemos exactamente qué productos promocionar y cuándo. Nuestras campañas son mucho más efectivas.',
        beforeSituation: 'Campañas de marketing sin dirección, inventario desbalanceado, ROI bajo',
        afterResults: 'Campañas dirigidas por datos, optimización de inventario, 60% mejora en ROI',
        serviceUsed: 'Talleres',
        industry: 'Retail',
        featured: false
      }
    ];

    // Simular carga de datos
    setTimeout(() => {
      setCasosExito(casosEjemplo);
      setLoading(false);
    }, 1000);
  }, []);

  const industrias = ['todas', ...Array.from(new Set(casosExito.map(caso => caso.industry)))];
  const servicios = ['todos', ...Array.from(new Set(casosExito.map(caso => caso.serviceUsed)))];

  const casosFiltrados = casosExito.filter(caso => {
    const matchIndustria = filtroIndustria === 'todas' || caso.industry === filtroIndustria;
    const matchServicio = filtroServicio === 'todos' || caso.serviceUsed === filtroServicio;
    return matchIndustria && matchServicio;
  });

  const casosDestacados = casosExito.filter(caso => caso.featured);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kamdata-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Historias de Éxito - Casos Reales de Transformación | Kamdata"
      description="Descubre cómo empresas reales han transformado sus datos en decisiones estratégicas con Kamdata. Casos de éxito, testimonios y resultados medibles."
      keywords="casos de exito kamdata, testimonios, transformacion digital, resultados, antes y despues, clientes kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary/10 to-kamdata-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Historias de <span className="text-kamdata-primary">Éxito</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descubre cómo empresas reales han transformado sus datos en decisiones estratégicas 
              y han logrado resultados medibles con nuestro acompañamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-kamdata-primary">50+</div>
                <div className="text-sm text-gray-600">Empresas transformadas</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-kamdata-primary">40%</div>
                <div className="text-sm text-gray-600">Mejora promedio en eficiencia</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-kamdata-primary">95%</div>
                <div className="text-sm text-gray-600">Satisfacción de clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformaciones reales que demuestran el poder de convertir datos en decisiones estratégicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {casosDestacados.map((caso) => (
              <div key={caso.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={caso.clientPhoto} 
                      alt={caso.clientName}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{caso.clientName}</h3>
                      <p className="text-kamdata-primary font-semibold">{caso.clientRole}</p>
                      <p className="text-gray-600">{caso.clientCompany}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{caso.testimonialText}"
                  </blockquote>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Antes:</h4>
                      <p className="text-red-700 text-sm">{caso.beforeSituation}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Después:</h4>
                      <p className="text-green-700 text-sm">{caso.afterResults}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-kamdata-primary/10 text-kamdata-primary rounded-full text-sm">
                      {caso.serviceUsed}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {caso.industry}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros y Todos los Casos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todas las Historias</h2>
            <p className="text-lg text-gray-600">
              Explora más casos de éxito organizados por industria y tipo de servicio
            </p>
          </div>
          
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industria:</label>
              <select 
                value={filtroIndustria}
                onChange={(e) => setFiltroIndustria(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
              >
                {industrias.map(industria => (
                  <option key={industria} value={industria}>
                    {industria === 'todas' ? 'Todas las industrias' : industria}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Servicio:</label>
              <select 
                value={filtroServicio}
                onChange={(e) => setFiltroServicio(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kamdata-primary focus:border-transparent"
              >
                {servicios.map(servicio => (
                  <option key={servicio} value={servicio}>
                    {servicio === 'todos' ? 'Todos los servicios' : servicio}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Lista de casos filtrados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosFiltrados.map((caso) => (
              <div key={caso.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={caso.clientPhoto} 
                    alt={caso.clientName}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{caso.clientName}</h3>
                    <p className="text-sm text-gray-600">{caso.clientCompany}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                  "{caso.testimonialText}"
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-kamdata-primary/10 text-kamdata-primary rounded text-xs">
                    {caso.serviceUsed}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                    {caso.industry}
                  </span>
                </div>
                
                {caso.videoUrl && (
                  <button className="mt-4 text-kamdata-primary hover:text-kamdata-secondary text-sm font-medium">
                    Ver video testimonial →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para ser la próxima historia de éxito?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya han transformado sus datos en ventaja competitiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-kamdata-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Conviértete en una Historia de Éxito
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-kamdata-primary transition-colors"
            >
              Conoce Nuestros Servicios
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoriasKamdata;