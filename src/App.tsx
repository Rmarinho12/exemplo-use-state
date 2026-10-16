import { useState } from "react";
import './App.css'
function App(){ 
  const[contador, setContador]= useState(0);
  function rederMain(){
    switch ( contador) {
      case 1:
        return <p> Opçao 1</p>
      break;
              1
       case 2:
      return <p>Opçao 2</p>
     break;
      default:
    
      return <p> opçao invalida </p>
      break; 

       case 3:
      return <p>Opçao 3 </p>
     break;

      case 4:
        return <p> Opçao 4</p>
        break;

    }
  }
  return(
      <>
      <section>
        <h1> Exemplo de uso de useState</h1>
        <ul>
          <li onClick={()=> setContador(1)}>Opçao 1</li>
          <li onClick={()=> setContador(2)}>Opçao 2</li>
          <li onClick={()=> setContador(3)}>Opçao 3</li>
           <li onClick={()=> setContador(4)}>Opçao 4</li>
        
        
        </ul>
      {rederMain()}
       </section>
      </>
     
  )
}
  
export default App;