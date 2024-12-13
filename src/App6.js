import React from "react";

function App6(){
    let nam = ['Ruchika' , 'Neha' , 'Nidhi' , 'Ruhi'] //array define
    let namelist = nam.map((el,ind,arr) => <h2>{el}</h2>) //map to transfer the array into jsx element
    return <div>{namelist}</div>   // Return a JSX element containing the mapped list
}



export default App6 ; 