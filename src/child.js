import React from "react";
import GrandChild from "./GrandChild";

const Child = ({message}) =>{
    return(
        <div>
            <h2>ChildComponent</h2>
            <GrandChild message = {message}></GrandChild>
        </div>
    );
}
export default Child;