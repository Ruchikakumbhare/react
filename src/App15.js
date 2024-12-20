import React,{useState} from "react";
import ChildCom2 from "./childCom2";

function App15(){
  const [isToggled , setIsTogged] = useState(true);

  const toggleHandler = () =>{
    setIsTogged((prev) => !prev) ;
  }

  return(
    <div>
        <h1>Parent Component</h1>
        <p>ToggleState:{isToggled ? "on" : "off"}</p>
        <ChildCom2 onToggle={toggleHandler}/>
    </div>
  )
}
export default App15;