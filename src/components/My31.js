import React, { Component } from "react";
import My31_1 from "./My31.1";

class My31 extends Component{
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => { //This syntext binds. No need to explicitely bind
        this.componentRef.current.focusInput() //focusInput defined in child
    }

    render(){
        return <div>
            <My31_1 ref = {this.componentRef} />
            <button onClick={this.clickHandler}>Focus</button>
        </div>
    }
}

export default My31