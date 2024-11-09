import React, { Component } from "react";

class My35 extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () =>{
        this.setState(prevState =>{
            return {count: prevState.count + 1}
        })
    }

    render(){
        const {count} = this.state
        return <div>
            <button onClick={this.increment}>Clicked {count} times</button>
        </div>
    }
}

export default My35