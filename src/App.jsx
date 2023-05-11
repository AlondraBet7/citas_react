import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"; 

function App(){
//Es la data que ingreso en el formulario por primera vez 
  const [pacientes, setPacientes] = useState([])
//Es la data que devuelvo al formulario para editar
  const [paciente, setPaciente] = useState({})


  //Para no perder los cambios que teniamos anteriormente lo solucionaremos con useEffect
  //Solo se va a ejecutar cuando el componente está listo
  useEffect(()=>{
    const obtenerLS= ()=>{
      const pacientesLS= JSON.parse(localStorage.getItem("pacientes")) ?? [];
      //Lo colocamos en el state
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
  
  //Para AGG al localStorage, es decir, escribir en localStorage cuando haya cambios en paciente

  useEffect(()=>{
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  

  //Funcion que trae un id, para eliminar 
  const eliminarPaciente =id =>{
     const pacientesActualizados = pacientes.filter(pacienteAct => pacienteAct.id !== id)

     //Probamos si funciona
    //console.log (pacientesActualizados)

    setPacientes(pacientesActualizados)
  }

  // const imprime2mas2 = () =>{
  //   console.log(2+2)
  // }

  // const toma1Valor = (valor) =>{
  //   console.log(valor)
  // }

return (
  
<div className="container mx-auto mt-20">
<Header 
// saludo={"hola"}
// toma1Valor ={toma1Valor}
// isAdmin={false}
// numero = {1}
// fn= {imprime2mas2}

/>
<div className="mt-12 md:flex">
<Formulario
//Este pacientes sería la copia que vamos a copiar antes de renderizar
pacientes={pacientes}
setPacientes= {setPacientes}
paciente={paciente}
setPaciente={setPaciente}
/>
<ListadoPacientes
pacientes={ pacientes}
setPaciente= {setPaciente}
eliminarPaciente = {eliminarPaciente}
/>

</div>
</div>
)
}

export default App;













// function App() {

  // const sumar = () =>{

  //   const numero = 5;

  //   if(numero >5){
  //     console.log("Es mayor")
  //   } 
  //    else if(numero == 5){
  //      console.log ("Es igual")
  //    }
  //   else {
  //     console.log("Es menor")
  //   }
  //   console.log(2+2)
  // }
  // sumar();
// const edad = 20;
//   return (
//    <>
   /*{ {edad >= 18? "Eres mayor de edad" :
   "No eres mayor de edad"} }*/
    // <div>
    //    <h1>{edad}</h1>
    //   {/* <h1>{"Hola Mundo!".toLowerCase()}</h1>
//     <img src="" alt="" /> */}
//     </div>
//     </>
//   )
// }

// export default App
