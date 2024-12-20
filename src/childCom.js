import React from "react";

function childCom({onbuttonclick}){
  return(
    <div>
        <h2>Child Component HEading</h2>
        <button onClick={onbuttonclick}>ChildButton</button>
    </div>
  )
}
export default childCom;