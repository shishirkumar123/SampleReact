import React, { Component } from "react";

class A extends Component{
    constructor(){
        super()
        this.state={
            message:"Hi"
        }
        
    }

    changeMessage(){
        this.setState({
            message: "bye"
        })
    }

    render(){
        return <div>
                <div>{this.state.message}</div>
                <div><button onClick={aFunc}> click it</button></div>
            </div>
    }
}

const aFunc = () => alert('called')

export default A