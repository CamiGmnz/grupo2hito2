import React from 'react';
import { Link } from 'react-router-dom';

function Presentacion() {
  return (
    <div id="presentacion">
      <h1> Bienvenido al sistema de Registro </h1>
      <h3> ¿ Ya tienes una cuenta ? <br/><Link id="link" to="/iniciosesion">Inicia sesión</Link> </h3>
      <h3> ¿ No tienes una cuenta ? <br/><Link id="link" to="/registro">Regístrate</Link> </h3>
    </div>
  );
}

export default Presentacion;
