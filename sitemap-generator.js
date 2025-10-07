const sitemapBuilder = require('react-router-sitemap-generator');
const path = require('path');

// La URL base de tu sitio
const hostname = 'https://www.kamdata.com.mx';

// Rutas de tu aplicación
const paths = [
  '/',
  '/sobre-kamdata',
  '/historias-kamdata',
  '/servicios',
  '/servicios/conferencias',
  '/servicios/talleres',
  '/servicios/mentoria-grupal',
  '/servicios/mentoria-individual',
  '/servicios/nexo-estrategico',
  '/metodo-dance',
  '/blog',
  '/contacto',
];

// La carpeta donde se guardará el archivo (la carpeta 'build' de producción)
const buildPath = path.resolve('./build');

// Generar el sitemap
sitemapBuilder(hostname, paths, buildPath);

console.log('✅ sitemap.xml generado exitosamente');