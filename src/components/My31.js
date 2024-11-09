import React, { Component } from "react";
import My31_1 from "./My31.1";

class My31 extends Component{
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => { //This syntax binds. No need to explicitely bind
        this.componentRef.current.focusInput() //focusInput defined in child
    }

    render(){
        return <div>
            { <My31_1 ref = {this.componentRef} /> /*Refs can be attached to class component only */}
            <button onClick={this.clickHandler}>Focus</button>
        </div>
    }
}

export default My31