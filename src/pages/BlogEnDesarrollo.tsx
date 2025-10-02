import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnDesarrollo from '../components/EnDesarrollo';

const BlogEnDesarrollo: React.FC = () => {
  return (
    <EnDesarrollo
      titulo="Blog/Recursos"
      descripcion="Estamos preparando contenido educativo de alta calidad: artículos sobre mentalidad digital, guías prácticas, recursos descargables y mini-cursos para ayudarte en tu transformación digital."
      icono="📚"
      colorAccent="kamdata-accent"
    />
  );
};

export default BlogEnDesarrollo;