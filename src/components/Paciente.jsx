


const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  //  console.log(paciente)

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente?')

    //React sabe en este momento cual id del paciente por el evento onClick.
    if (respuesta){
      eliminarPaciente(id)
    }
  }

  //Destructuring

  const {nombre,propietario,email,fecha,sintomas,id} = paciente;

  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
        <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
        <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {' '}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {' '}
        <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {' '}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between m-10">
          <button 
              type="button" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-10 rounded"
              //arrow function, callbacks
              onClick={()=>setPaciente(paciente)} 
            >Editar</button>
          <button 
            type="button" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded"
            onClick={handleEliminar} 
            >Eliminar</button>
        </div>
 </div>
  )
}

export default Paciente
