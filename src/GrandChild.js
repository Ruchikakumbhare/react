//  prop drilling - yes
//  global storage 
//  custom hooks 
//  event emitters
//  local storage

import React, { useState } from "react";

const GrandChild = ({message}) =>{
    return(
        <div>
            <h2>GrandChildComponent</h2>
            <p>Message:{message}</p>
        </div>
    )
}
export default GrandChild