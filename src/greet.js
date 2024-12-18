import React from "react";

function greet(props){
    console.log(props)
    return (
        <div>
            <h1>hello {props.name}</h1>
            <p>welcome to {props.city}</p>
        </div>
    );
};
export default greet;