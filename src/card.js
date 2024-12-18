import React from "react";

let Card = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.children}</h3>
        </div>
    )
}
export default Card;