import React,{useState} from "react";

const Counter = () => {
        const [count, setCount] = useState(0);
        
    const increment =() => setCount(count + 1);
    const decrement =() => setCount(count-1)
    const reset =() => setCount(0)

return(
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </>
)
}
export default Counter;
