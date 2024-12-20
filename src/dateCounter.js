import React , {useState} from "react";


const DateCounter = () => {
    const [currentDate , SetCurentDate] = useState(new Date())

    const incrementDate = () =>{
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + 1)
        SetCurentDate(newDate)

    }
    const decrementDate =() => {
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() - 1)
        SetCurentDate(newDate)
    }
    const resetDate =() =>{
                SetCurentDate(new Date())
            }

    return(
        <div>
            <h1>{currentDate.toDateString()}</h1>
            <button onClick={incrementDate}>Increment-Date</button>
            <br></br>
            <br></br>
            <button onClick={decrementDate}>decrement-Date</button>
            <br></br>
            <br></br>
            <button onClick={resetDate}>Reset</button>
            <br></br>
            <br></br>
        </div>
    )
}
export default DateCounter;