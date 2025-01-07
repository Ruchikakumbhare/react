import React , {useRef} from "react";

function App20(){
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus()
    }
return (
    <div>
        <input ref = {inputRef} type="text" placeholder="type something..." />
        <button onClick={focusInput}>Focus Input</button>
    </div>
)


}
export default App20;


// useState is used to manage state in functional components. It allows you to add stateful logic to a component without converting it to a class component.
// useEffect is used to perform side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM.
// useReducer is used to manage complex state logic in functional components. It is an alternative to useState and is inspired by Redux.
// useRef is used to create a mutable reference that persists across renders. It can hold a reference to a DOM element or store a mutable value.
// component to component data pass krne  --prop drilling