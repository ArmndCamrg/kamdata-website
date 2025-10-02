import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnDesarrollo from '../components/EnDesarrollo';

const HistoriasKamdataEnDesarrollo: React.FC = () => {
  return (
    <EnDesarrollo
      titulo="Historias Kamdata"
      descripcion="Pronto podrás conocer las historias reales de transformación de nuestros clientes. Casos de éxito, testimonios y resultados medibles que demuestran el poder de convertir datos en decisiones estratégicas."
      icono="📈"
      colorAccent="kamdata-secondary"
    />
  );
};

export default HistoriasKamdataEnDesarrollo;