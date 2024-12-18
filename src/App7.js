import React from "react";
import Person from "./person";

function App7(){
   const Persons = [
    {
        id : 1,
        Name : "Ruchika Kumbhare" ,
        Age : 22
    },
    {
        id : 2,
        Name : "Akriti sharma" ,
        Age : 25
    },
    {
        id : 3,
        Name : "Priyanka Vaidya"  ,
        Age : 26
    }
 ]
let persons = Persons.map((person) => <Person obj = {person}/>)
return <div>{persons}</div> 
}
export default App7;
