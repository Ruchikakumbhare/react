import React from "react";
function childCom2({onToggle}){
  return(
    <div>
        <h2>Child Component</h2>
        <button onClick={onToggle}> Click_to_change</button>
    </div>
  )
}
export default childCom2;