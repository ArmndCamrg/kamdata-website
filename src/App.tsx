import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// No necesitamos HelmetProvider aquí
import ToastContainer from './components/Toast';
import Home from './pages/Home';
import SobreKamdata from './pages/SobreKamdata';
import HistoriasKamdataEnDesarrollo from './pages/HistoriasKamdataEnDesarrollo';
import BlogEnDesarrollo from './pages/BlogEnDesarrollo';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Conferencias from './pages/Conferencias';
import Talleres from './pages/Talleres';
import MentoriaGrupal from './pages/MentoriaGrupal';
import MentoriaIndividual from './pages/MentoriaIndividual';
import NexoEstrategico from './pages/NexoEstrategico';
import MetodoDance from './pages/MetodoDance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-kamdata" element={<SobreKamdata />} />
          <Route path="/historias-kamdata" element={<HistoriasKamdataEnDesarrollo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/conferencias" element={<Conferencias />} />
          <Route path="/servicios/talleres" element={<Talleres />} />
          <Route path="/servicios/mentoria-grupal" element={<MentoriaGrupal />} />
          <Route path="/servicios/mentoria-individual" element={<MentoriaIndividual />} />
          <Route path="/servicios/nexo-estrategico" element={<NexoEstrategico />} />
          <Route path="/metodo-dance" element={<MetodoDance />} />
          <Route path="/blog" element={<BlogEnDesarrollo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;