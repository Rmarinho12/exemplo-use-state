import { useState } from "react";
import './App.css'
function App(){ 
  const[contador, setContador]= useState(0);

  return(
      <>
      <section>
        <h1> Exemplo de uso de useState</h1>
      <input type='text'/>
      <p> {contador}</p>
      <br />
      <input type="button" value="clique" onClick={()=>[ 
        setContador ( contador+1)
      ]}/>
       </section>
      </>
     
  )
}
  
export default App;