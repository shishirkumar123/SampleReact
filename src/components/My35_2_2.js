import React, { Component } from "react";
import UpdatedComponent from "./My35_2_1";

/**
 * TODO: Rewrite the component by moving common code here and My_35_2_3 to
 * high order function in My_35_2_1
 * https://www.youtube.com/watch?v=rsBQj6X7UK8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=34
 */
class My35_2_2 extends Component{
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
            <button onClick={this.increment}>{this.props.name} : Clicked  ha ha {count} times</button>
        </div>
    }
}

export default UpdatedComponent(My35_2_2)