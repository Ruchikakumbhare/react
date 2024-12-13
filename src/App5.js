import React,{Component} from "react";

class App5 extends Component {
    constructor(props){
       super(props)
       this.state = {
        isloggedIn : true
       }
    }


// if else approach
// render() {
//     if(this.state.isloggedIn){
//         return <h1>Welcome Ruzz</h1>;
//     }
//     else{
//         return <h1>Bye Ruzz</h1>;
//     }
// }


//element variable based approach
// render(){
//     let message;
//     if(this.state.isloggedIn){
//         message = <h1>Welcome Ruzz</h1>;
//     }
//     else{
//         message = <h1>bye Ruzz</h1>;
//     }
//     return <div>{message}</div>
// }


// ternary approach
// render(){
//     return(
//         <div>
//             {this.state.isloggedIn ? <h1>hello ruchi</h1> : <h1>bye ruchi</h1>}
//         </div>
//     )
// }

render(){
    return this.state.isloggedIn && <h1>Good Night</h1>
}

}

export default App5 ; 
