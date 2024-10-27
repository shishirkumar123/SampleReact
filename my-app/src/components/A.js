import React, { Component } from "react";

class A extends Component{
    constructor(){
        super()
        this.state={
            message:"Hi",
            count: 0,
        }
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState(
            {
                message: "bye",
                count: this.state.count + 1
            },
            () => {
                console.log("as callbak")
                console.log(this.state.count)
            }
        )
        console.log(this.count)
        console.log(this.state.count)
    }

    render(){
        return <div>
                <div>{this.state.message}</div>
                <div>{this.state.count} times</div>
                <div><button onClick={this.changeMessage}> click it</button></div>
            </div>
    }
}

const aFunc = () => alert('called')

export default A