import React, {useReducer} from "react";


function reducer(state,action){
       switch(action.type){
        case "increment":
            return{count:state.count+1};
        case "decrement":
            return{count:state.count-1};
        case "reset":
            return{count:0}
            default:
                throw new Error("unkown action type")
       }
}

function App19(){
     const [state,dispatch] = useReducer (reducer,{count:0});
     return(
        <div>
            <h1>count:{state.count}</h1>
            <button onClick={() =>dispatch({type:"increment"})}>increment</button>
            <button onClick={() =>dispatch({type:"decrement"})}>decrement</button>
            <button onClick={() =>dispatch({type:"reset"})}>reset</button>
        </div>
     )
}

export default App19;






