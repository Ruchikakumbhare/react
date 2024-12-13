import React,{Component} from "react";


class App9 extends Component {
      constructor(props){
        super(props);
        this.state = {
            message: 'Welcome to react class'
        };
      }
      changeMessage(){
        this.setState({
            message:'Visit Again!!!'
        })
      }
      render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click to subscribe</button>
            </div>
        )
      }





}



export default App9;