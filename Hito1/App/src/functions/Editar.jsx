export default function EditarTarea () {
    const handleEditar = () => {
        console.log('este boton edita');
      };
    return(
        <div>
            <button onClick={handleEditar}>Editar</button>
        </div>
    )
  }