const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// La URL base de tu sitio
const hostname = 'https://www.kamdata.com.mx';

// Lista de tus rutas
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/sobre-kamdata', changefreq: 'monthly', priority: 0.8 },
  { url: '/historias-kamdata', changefreq: 'monthly', priority: 0.7 },
  { url: '/servicios', changefreq: 'monthly', priority: 0.9 },
  { url: '/servicios/conferencias', changefreq: 'weekly', priority: 0.8 },
  { url: '/servicios/talleres', changefreq: 'weekly', priority: 0.8 },
  { url: '/servicios/mentoria-grupal', changefreq: 'weekly', priority: 0.8 },
  { url: '/servicios/mentoria-individual', changefreq: 'weekly', priority: 0.8 },
  { url: '/servicios/nexo-estrategico', changefreq: 'weekly', priority: 0.8 },
  { url: '/metodo-dance', changefreq: 'monthly', priority: 0.9 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  { url: '/contacto', changefreq: 'yearly', priority: 0.5 },
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname });
  const outputPath = path.resolve(__dirname, 'build', 'sitemap.xml');

  // Escribe las URLs al stream
  links.forEach(link => {
    sitemapStream.write(link);
  });
  sitemapStream.end();

  // Convierte el stream a XML y guárdalo en un archivo
  const sitemapXML = await streamToPromise(sitemapStream).then(data => data.toString());
  createWriteStream(outputPath).write(sitemapXML);

  console.log('✅ sitemap.xml generado con la nueva librería.');
}

generateSitemap();