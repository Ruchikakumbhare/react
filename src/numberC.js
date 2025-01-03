import React, {useState} from "react";


const NumberC = () =>{
    const[count,setCount] = useState(0);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount (count-1)
    const reset = () => setCount(0)

    return(
        <div>
            <h1>Number_counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>inc</button>
       
            <button onClick={decrement}>Dec</button>
            <button onClick={reset}>res</button>
        </div>
    )
}

export default NumberC;