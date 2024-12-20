import React from "react";
import ChildCom from "./childCom";

function App14(){
    const handlebutton = () =>{
        alert('Click to button in child component')
    }

    return(
        <div>
            <h1>Click Button to open alert mssg!</h1>
            <ChildCom onbuttonclick = {handlebutton}/>
          
        </div>
    )
}
export default App14;