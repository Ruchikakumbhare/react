import React, { useState } from "react";

function App8(){
  
    // let message = "Welcome to First Code"
    // function changeMessage(){
    //     message = "Thank you "
    //     console.log(message)
    // }


    let [message ,setCureectMessage]  = useState('welcome to vs-code')

    function changeMessage(){
        setCureectMessage ('Visit Again Thank you')
    }
return(
    <div>
        <h1>{message}</h1>
        <button onClick={changeMessage}>Click to subscribe</button>
    </div>
)

}

export default App8;
