// Parent Component : Manages the shared state

import { useState } from "react";
import InputC from "./InputC";
import DisplayC from "./DisplayC"

function ParentC(){
    const [sharedValue, setSharedValue] = useState("");
    return (
        <div>
            <h1>State Uplifiting example</h1>
            <InputC onInputChange={setSharedValue}/>
            <DisplayC value = {sharedValue}/>
        </div>
    )

}
export default ParentC

// useContext()  
// basic ways ----> to pass value and methods to another component