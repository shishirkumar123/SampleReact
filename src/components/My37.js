/*
https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37
*/

import React, { Component } from "react";

class My37 extends Component{
    render(){
        // return <h1> {this.props.name}</h1>
        // return <h1> {this.props.name(true)}</h1> // see App.js and compare with above
        return <h1> {this.props.render(true)}</h1>
    }
}

export default My37