import React, { useState } from "react";
import Child from "./child"
const Parent =() => {
    const[message,setmessage] = useState('hello from parent....')
    return(
        <div>
            <h1>parent component</h1>
            <Child message = {message}/>
        </div>
    );
}
export default Parent ;