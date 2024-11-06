import React, { Component } from "react";

class PChild extends Component{
    render(){
        return <div>From Child {this.props.fName}</div>
    }
}

export default PChild