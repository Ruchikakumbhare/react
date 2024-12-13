import React  from "react";

function Person ({obj}){
    console.log(obj)
    return(
        <div>
            <h1>i am {obj.Name} ,my age is {obj.Age}</h1>
        </div>
    )

}
export default Person;