import React from "react";

// function App10(){
//     return <h1>hello world</h1>
// }

// function App10(){
//     return(<div>
//       <h1>hello Ruchika</h1>
//     </div>
//     )
// }

function App10(){
    let arr = ['ruchika' , 'sanjay ' , 'kumbhare']
    let ax = arr.map((el,ind,arr) => <h2>{el}</h2>)
    return <div>{ax}</div>
}




export default App10;