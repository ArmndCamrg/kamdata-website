import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async'; // <-- 1. Importar

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> {/* <-- Es buena práctica envolver todo aquí */}
    <HelmetProvider>   {/* <-- 2. Envolver tu App */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);