import React, { Component } from "react";

class My27 extends Component{
    render(){
        //This is child of My28
        console.log('Component - (My27) - render') //// This is print in a loop but My26 prints only once
        return <div>
            Regular component {this.props.name}
        </div>
    }
}

export default My27