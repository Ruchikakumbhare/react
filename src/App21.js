import React , {useRef , useState}from "react";

function App21(){
    const renderCount = useRef(0)
    const [text,setText] = useState("")
   
    renderCount.current = renderCount.current+1

return (
    <div>
        <input
        type="text"
        value={text}
        onChange={(e) =>{
       setText(e.target.value)
        } }  />
        <p>Inputvalue:{text}</p>
        <p>component has render {renderCount.current} times</p>
    </div>
)

}
export default App21;
