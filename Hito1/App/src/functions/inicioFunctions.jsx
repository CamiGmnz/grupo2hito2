import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NuevaTarea() {
  const [tarea, setTarea] = useState();
  const [desc, setDesc] = useState();

  const handleTareaChange = (event) => {
    setTarea(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleAgregar = () => {
    console.log('Tarea:', tarea);
    console.log('Descripción:', desc);
  };
    return(
      <div>
        <div>
          <label>Crear nueva tarea:</label> <br/>
          <input className="bloque" type="text" value={tarea} onChange={handleTareaChange}/><br/>
        </div>
        <div>
          <label>Descripción:</label> <br/>
          <input className="bloque"  type="textarea" value={desc} onChange={handleDescChange}/><br/>
        </div>
        <br/>
        <br/>
          <button onClick={handleAgregar}>Agregar tarea</button>
          <br />
          <br />
          <br />
          <button> <Link id="link" to="/editar">Editar Tarea</Link></button>
          <br />
          <br />
          <button> <Link id="link" to="/eliminar">Eliminar Tarea</Link></button>
          <br />
          <br />
          <button> <Link id="link" to="/filtrar">Filtrar Tarea</Link></button>
          <br />
          <br />
          <br />
          <br />
          <button> <Link id="link" to="/paginaPrincipal">Volver al inicio</Link></button>
      </div>
    )
}
