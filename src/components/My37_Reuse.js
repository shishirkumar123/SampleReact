import React, { Component } from "react";

/**
 * Seems like template pattern. This class seems like teplate method.
 * It is reused in App.js class
 * https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37
 * TODO: 9.53 in the video describes a slight variation
 */
class My37_Reuse extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render(){
        return <div>
            {this.props.render(this.state.count, this.incrementCount)}
        </div>
    }
}
export default My37_Reuse