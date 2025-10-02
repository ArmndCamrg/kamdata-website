import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import NewsletterForm from '../components/NewsletterForm';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos los Artículos', count: 12 },
    { id: 'transformacion-digital', name: 'Transformación Digital', count: 5 },
    { id: 'liderazgo', name: 'Liderazgo', count: 3 },
    { id: 'innovacion', name: 'Innovación', count: 2 },
    { id: 'metodologias', name: 'Metodologías', count: 2 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'El Futuro de la Transformación Digital: Tendencias 2024',
      excerpt: 'Descubre las principales tendencias que están definiendo el panorama de la transformación digital en 2024 y cómo preparar tu organización.',
      content: '',
      author: 'Carlos Kamdata',
      date: '2024-01-15',
      category: 'transformacion-digital',
      tags: ['IA', 'Automatización', 'Cloud'],
      readTime: '8 min',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: '2',
      title: 'Liderazgo en la Era Digital: Competencias Clave',
      excerpt: 'Las habilidades de liderazgo que todo ejecutivo necesita desarrollar para navegar exitosamente la transformación digital.',
      content: '',
      author: 'María González',
      date: '2024-01-10',
      category: 'liderazgo',
      tags: ['Liderazgo', 'Competencias', 'Gestión'],
      readTime: '6 min',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: '3',
      title: 'Método DANCE: Casos de Éxito Reales',
      excerpt: 'Análisis detallado de tres casos de éxito donde el Método DANCE transformó completamente organizaciones tradicionales.',
      content: '',
      author: 'Carlos Kamdata',
      date: '2024-01-05',
      category: 'metodologias',
      tags: ['DANCE', 'Casos de Éxito', 'Metodología'],
      readTime: '12 min',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '4',
      title: 'Innovación Disruptiva: Cómo Identificar Oportunidades',
      excerpt: 'Estrategias probadas para identificar y capitalizar oportunidades de innovación disruptiva en tu industria.',
      content: '',
      author: 'Ana Rodríguez',
      date: '2024-01-01',
      category: 'innovacion',
      tags: ['Innovación', 'Disrupción', 'Estrategia'],
      readTime: '10 min',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '5',
      title: 'Data Analytics: El Poder de los Datos en la Toma de Decisiones',
      excerpt: 'Cómo implementar una cultura data-driven en tu organización y aprovechar el poder de los datos para decisiones estratégicas.',
      content: '',
      author: 'Roberto Silva',
      date: '2023-12-28',
      category: 'transformacion-digital',
      tags: ['Data Analytics', 'Big Data', 'BI'],
      readTime: '9 min',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '6',
      title: 'Gestión del Cambio: Superando la Resistencia Organizacional',
      excerpt: 'Técnicas efectivas para gestionar la resistencia al cambio y asegurar la adopción exitosa de nuevas tecnologías.',
      content: '',
      author: 'Laura Martínez',
      date: '2023-12-25',
      category: 'liderazgo',
      tags: ['Gestión del Cambio', 'Resistencia', 'Adopción'],
      readTime: '7 min',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <Layout
      title="Blog - Insights sobre Transformación Digital - Kamdata"
      description="Descubre los últimos insights, tendencias y mejores prácticas en transformación digital, liderazgo e innovación. Blog oficial de Kamdata."
      keywords="blog transformación digital, insights liderazgo, tendencias innovación, metodología DANCE, Kamdata"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kamdata-primary via-kamdata-secondary to-kamdata-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="text-kamdata-accent">Kamdata</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Insights, tendencias y mejores prácticas en transformación digital
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-kamdata-accent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Artículos Destacados
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-kamdata-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Destacado
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-kamdata-primary font-semibold text-sm">
                          {getCategoryName(post.category)}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-kamdata-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-kamdata-primary/10 rounded-full flex items-center justify-center mr-3">
                            <span className="text-kamdata-primary font-semibold text-sm">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">{post.author}</div>
                            <div className="text-xs text-gray-500">{formatDate(post.date)}</div>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-kamdata-primary font-semibold hover:text-kamdata-secondary transition-colors">
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories and Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar - Categories */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-kamdata-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Newsletter Signup */}
                  <div className="mt-8 p-4 bg-gradient-to-br from-kamdata-primary to-kamdata-secondary rounded-lg text-white">
                    <h4 className="font-bold mb-2">Newsletter</h4>
                    <p className="text-sm mb-4 opacity-90">Recibe los últimos insights directamente en tu email</p>
                    <NewsletterForm
                      source="blog-sidebar"
                      placeholder="Tu email"
                      buttonText="Suscribirse"
                      showLabels={false}
                      className="space-y-2"
                    />
                  </div>
                </div>
              </div>

              {/* Main Content - Posts */}
              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedCategory === 'all' ? 'Todos los Artículos' : getCategoryName(selectedCategory)}
                  </h2>
                  <div className="text-gray-600">
                    {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
                  </div>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron artículos</h3>
                    <p className="text-gray-600">Intenta con otros términos de búsqueda o selecciona una categoría diferente.</p>
                  </div>
                ) : (
                  <div className="grid gap-8">
                    {filteredPosts.map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="relative overflow-hidden h-48 md:h-full">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-kamdata-primary font-semibold text-sm">
                                {getCategoryName(post.category)}
                              </span>
                              <span className="text-gray-500 text-sm">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-kamdata-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-kamdata-primary/10 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-kamdata-primary font-semibold text-sm">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800">{post.author}</div>
                                  <div className="text-xs text-gray-500">{formatDate(post.date)}</div>
                                </div>
                              </div>
                              <Link to={`/blog/${post.id}`} className="text-kamdata-primary font-semibold hover:text-kamdata-secondary transition-colors">
                                Leer más →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > 6 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        ← Anterior
                      </button>
                      <button className="px-4 py-2 bg-kamdata-primary text-white rounded-lg">
                        1
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        2
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        3
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        Siguiente →
                      </button>
                    </div>
                  </div>
                )}
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
              ¿Quieres Transformar tu Organización?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Aplica los insights de nuestro blog con nuestros servicios de consultoría especializada
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

export default Blog;