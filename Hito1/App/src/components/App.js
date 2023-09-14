import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './PaginaPrincipal';
import Presentacion from './PaginaPrincipal';
import RegistroDeUsuarios from './RegistroUsuarios';
import InicioSesion from './InicioSesion';
import NuevaTarea from '../functions/inicioFunctions';
import EditarTarea from '../functions/Editar';
import Eliminar from '../functions/Eliminar';
import Filtrar from '../functions/Filtrar';
import Completa from '../functions/Completa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/paginaPrincipal" element={<PaginaPrincipal/>} />
        <Route path="/registro" element={<RegistroDeUsuarios />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/iniciofunctions" element={<NuevaTarea />} />
        <Route path="/completa" element={<Completa />} />
        <Route path="/editar" element={<EditarTarea />} />
        <Route path="/eliminar" element={<Eliminar />} />
        <Route path="/filtrar" element={<Filtrar />} />
      </Routes>
    </Router>
  );
}

export default App;

