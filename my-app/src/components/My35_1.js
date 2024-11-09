import React, { Component } from "react"; //Maynot need to do this from version 16 onwards

class My35_1 extends Component{

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
            <h2 onMouseOver ={this.increment}>Hovered {count} times</h2>
        </div>
    }
}

export default My35_1
