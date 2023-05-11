// import { useEffect } from "react";
import Pacientes from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) =>{

    // useEffect(()=>{
    //     if (pacientes.length > 0){
    //         console.log ("Nuevo paciente")
    //     }
    // },[pacientes])

    //para verificar que lo estemos leyendo correctamente
    // console.log(pacientes)
return(
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    
    {pacientes && pacientes.length?( 
        <>
    <h1 className="font-black text-3xl text-center">Listado pacientes</h1>

    <p className=" text-xl text-center mt-5 mb-10">
        Administra tus {" "}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
    </p>
 
    {
        //paciente es una variable temporal
        pacientes.map(paciente =>(           
            //GENERAR UN COMPONENTE POR CADA UNO DE LOS ELEMENTOS
            <Pacientes
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />

        ) ) }   
        </>
        ):(
    <>
    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
    <p className=" text-xl text-center mt-5 mb-10">
        Comienza agregando pacientes{" "}
        <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
    </p>
    </>
            )} 
    </div>
    )   
}
 
export default ListadoPacientes;