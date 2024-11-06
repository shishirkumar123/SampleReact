import React, { Component } from "react";

//Use of refs
//1. Focus on text on load

class My30 extends Component{
    constructor(props){
        super(props)
        //New way of creating ref
        this.inputRef = React.createRef()

        //Old way of creating ref - callback ref
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        //new way
        // if(this.cbRef){ //null check
        //     this.cbRef.focus()
        // }

        //old way
        this.inputRef.current.focus() //you can see details of current object in console
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render(){
        return <div>
            <input type='text' ref={this.inputRef}/>{/* New way */}
            <input type='text' ref={this.setCbRef}/>{/* Old way */}
            <button onClick={this.clickHandler}>Click</button> 
        </div>
    }
}

export default My30