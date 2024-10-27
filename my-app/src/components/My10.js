import React, { Component } from "react";

class My10 extends Component{
    constructor(props){
        super(props)
        this.state={
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
        //binding in constructor performs better because binding happens only once
        // and not everytime the page is rendered
    }

    clickHandler(){

        this.setState(   // This throw exception If handler is not called properly -  A.js:13 Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
            {
                message: 'bye'
            }
        )
        console.log(this)

    }


    render(){
        return  <div>
                    <div>{this.state.message}</div>
                    <div><button onClick={this.clickHandler}>Click</button></div>           
                    {/*  above returns undefined at console. Uncomment line number 9 to make this work*/}

                    {/* <div><button onClick={this.clickHandler.bind(this)}>Click</button></div>  */}
                    {/* above works fine */}

                    {/* <div><button onClick={() => this.clickHandler()}>Click</button></div>   */}
                    {/* above works fine */}
                </div>
    }
}

export default My10