import React, { Component } from "react";

// https://www.youtube.com/watch?v=8aCXVC9Qmto&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=29
class My31_1 extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.focusInput = this.focusInput.bind(this); // Bind focusInput to this instance
                                                      // Is line is missing in tutorial.
    }

    focusInput = () =>{// Arrow function to bind `this`
        this.inputRef.current.focus()
    }

    render(){
        return <div>
            <div><input type="text" ref={this.inputRef}/></div>
        </div>
    }
}

export default My31_1