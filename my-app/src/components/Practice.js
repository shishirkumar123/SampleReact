import React, { Component } from "react";

class Practice extends Component{
    constructor(){
        super()
        this.state = {
             message: "Welcome ",
             count: 0
        }
    }

    changeMessage(){
        this.setState({
            message: "Bye ",
            count: this.state.count  + 1
        },
        () => {
            alert("Now")
            console.log(this.state.count)
        }
    ) 
        console.log(this.count)
             
    }

    render(){
        return(
            <div>
                My message to you {this.state.message}. You clicked {this.state.count} times 
                <button onClick={() => this.changeMessage()}> Exit </button>
                
            </div>
        )
    }
}

export default Practice