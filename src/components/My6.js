import React, { Component } from "react";

class My6 extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Click the button below and see this text change'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Hee Hee Haa Haa'
        })
    }

    render(){
        return <div>             
                    <div>{this.state.message}</div>
                    <div><button onClick={() => this.changeMessage()}>Click Me!!</button></div>
                </div>
                // Why onclick takes function? Why cant we directly pass function name?
                //Try these - 
                //1.--------------------
                //      <button onClick={this.changeMessage()}> click it</button>
                //      Generates error - uncaught Error: Maximum update depth exceeded.
                //2---------------------
                //      <button onClick={this.changeMessage}> click it</button>
                //      Generates error - Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
                //3-------------------------
                //In the construnctor
                //       this.changeMessage = this.changeMessage.bind(this)
                //In the render()
                //      <div><button onClick={this.changeMessage}> click it</button></div>
                // works fine
    }
}

export default My6