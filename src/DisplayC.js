// child component 2 : Displays data received from the parent

import React from "react";
function DisplayC({value}){

    return (
        <div>
            <p>Value from Input:{value}</p>
        </div>
    )

}
export default DisplayC;