module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'sitemap-generator',
      {
        hostname: 'https://www.kamdata.com.mx',
        paths: [
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
        ],
        outputPath: 'build',
      },
    ],
  ],
};