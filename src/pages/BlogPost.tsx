import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // En una implementación real, esto vendría de una API o base de datos
  const blogPosts: { [key: string]: BlogPost } = {
    '1': {
      id: '1',
      title: 'El Futuro de la Transformación Digital: Tendencias 2024',
      content: `
        <p>La transformación digital ha evolucionado significativamente en los últimos años, y 2024 marca un punto de inflexión crucial para las organizaciones que buscan mantenerse competitivas en un mundo cada vez más digitalizado.</p>
        
        <h2>Inteligencia Artificial Generativa: El Nuevo Paradigma</h2>
        <p>La IA generativa está revolucionando la forma en que las empresas operan, desde la automatización de procesos hasta la creación de contenido personalizado. Las organizaciones que adopten estas tecnologías temprano tendrán una ventaja competitiva significativa.</p>
        
        <h3>Casos de Uso Emergentes:</h3>
        <ul>
          <li><strong>Automatización de Procesos Cognitivos:</strong> Tareas que antes requerían intervención humana ahora pueden ser automatizadas completamente.</li>
          <li><strong>Personalización a Escala:</strong> Creación de experiencias únicas para cada cliente utilizando IA.</li>
          <li><strong>Análisis Predictivo Avanzado:</strong> Predicción de tendencias y comportamientos con mayor precisión.</li>
        </ul>
        
        <h2>Cloud-First: La Nueva Arquitectura Empresarial</h2>
        <p>Las organizaciones están adoptando estrategias cloud-first, no solo para reducir costos, sino para habilitar la innovación y la escalabilidad. La nube se ha convertido en el fundamento de la transformación digital moderna.</p>
        
        <blockquote>
          "Las empresas que no adopten una estrategia cloud-first en 2024 se quedarán atrás en términos de agilidad y capacidad de innovación." - Gartner Research
        </blockquote>
        
        <h2>Experiencia del Cliente Omnicanal</h2>
        <p>La expectativa de los clientes por experiencias seamless a través de todos los canales está impulsando inversiones significativas en plataformas de experiencia del cliente (CXP).</p>
        
        <h3>Elementos Clave de una Estrategia Omnicanal:</h3>
        <ol>
          <li>Unificación de datos de clientes</li>
          <li>Personalización en tiempo real</li>
          <li>Consistencia de marca en todos los touchpoints</li>
          <li>Análisis de journey del cliente</li>
        </ol>
        
        <h2>Sostenibilidad Digital</h2>
        <p>La sostenibilidad ya no es solo una responsabilidad social, sino un imperativo de negocio. Las tecnologías digitales están siendo utilizadas para crear operaciones más sostenibles y transparentes.</p>
        
        <h2>Preparando tu Organización para el Futuro</h2>
        <p>Para navegar exitosamente estas tendencias, las organizaciones deben:</p>
        
        <ul>
          <li>Desarrollar una cultura de innovación continua</li>
          <li>Invertir en el desarrollo de competencias digitales</li>
          <li>Adoptar metodologías ágiles de transformación</li>
          <li>Establecer partnerships estratégicos con proveedores de tecnología</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>El futuro de la transformación digital en 2024 será definido por organizaciones que puedan combinar tecnologías emergentes con estrategias centradas en el humano. El éxito no solo dependerá de la adopción de nuevas tecnologías, sino de la capacidad de integrarlas de manera coherente en la estrategia de negocio.</p>
        
        <p>En Kamdata, hemos desarrollado el <strong>Método DANCE</strong> precisamente para ayudar a las organizaciones a navegar esta complejidad y lograr transformaciones digitales exitosas y sostenibles.</p>
      `,
      author: 'Carlos Kamdata',
      date: '2024-01-15',
      category: 'transformacion-digital',
      tags: ['IA', 'Automatización', 'Cloud'],
      readTime: '8 min',
      image: '/api/placeholder/800/400'
    }
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <Layout title="Artículo no encontrado - Kamdata">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">El artículo que buscas no existe o ha sido movido.</p>
          <Link to="/blog" className="bg-kamdata-primary text-white px-6 py-3 rounded-lg hover:bg-kamdata-secondary transition-colors">
            Volver al Blog
          </Link>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryId: string) => {
    const categories: { [key: string]: string } = {
      'transformacion-digital': 'Transformación Digital',
      'liderazgo': 'Liderazgo',
      'innovacion': 'Innovación',
      'metodologias': 'Metodologías'
    };
    return categories[categoryId] || categoryId;
  };

  return (
    <Layout
      title={`${post.title} - Blog Kamdata`}
      description={post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'}
      keywords={post.tags.join(', ') + ', Kamdata, transformación digital'}
    >
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-kamdata-primary hover:text-kamdata-secondary">Inicio</Link>
            <span className="text-gray-400">›</span>
            <Link to="/blog" className="text-kamdata-primary hover:text-kamdata-secondary">Blog</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">{getCategoryName(post.category)}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category and Reading Time */}
            <div className="flex items-center justify-between mb-6">
              <span className="bg-kamdata-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {getCategoryName(post.category)}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime} de lectura</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-kamdata-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-kamdata-primary font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">{post.author}</div>
                <div className="text-gray-500 text-sm">{formatDate(post.date)}</div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              style={{
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Sharing */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Compartir este artículo</h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-kamdata-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-kamdata-primary font-bold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{post.author}</h4>
                  <p className="text-gray-600 mb-3">
                    Experto en transformación digital con más de 15 años de experiencia ayudando a organizaciones 
                    a navegar exitosamente su evolución tecnológica. Fundador y CEO de Kamdata.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-kamdata-primary hover:text-kamdata-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-kamdata-primary hover:text-kamdata-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link 
                to="/blog" 
                className="flex items-center space-x-2 text-kamdata-primary hover:text-kamdata-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Volver al Blog</span>
              </Link>
              
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-kamdata-primary transition-colors">
                  ← Artículo Anterior
                </button>
                <button className="text-gray-400 hover:text-kamdata-primary transition-colors">
                  Siguiente Artículo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Placeholder para artículos relacionados */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/api/placeholder/400/200" alt="Artículo relacionado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-kamdata-primary font-semibold text-sm">Liderazgo</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">Liderazgo en la Era Digital</h3>
                  <p className="text-gray-600 text-sm mb-4">Las competencias clave que todo líder necesita...</p>
                  <button className="text-kamdata-primary font-semibold hover:text-kamdata-secondary transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/api/placeholder/400/200" alt="Artículo relacionado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-kamdata-primary font-semibold text-sm">Metodologías</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">Método DANCE en Acción</h3>
                  <p className="text-gray-600 text-sm mb-4">Casos reales de transformación exitosa...</p>
                  <button className="text-kamdata-primary font-semibold hover:text-kamdata-secondary transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/api/placeholder/400/200" alt="Artículo relacionado" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-kamdata-primary font-semibold text-sm">Innovación</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">Innovación Disruptiva</h3>
                  <p className="text-gray-600 text-sm mb-4">Cómo identificar oportunidades de disrupción...</p>
                  <button className="text-kamdata-primary font-semibold hover:text-kamdata-secondary transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kamdata-primary to-kamdata-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Te Gustó Este Artículo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Descubre cómo podemos ayudarte a implementar estas ideas en tu organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-kamdata-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contactar Expertos
              </a>
              <a 
                href="/servicios" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kamdata-primary transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;