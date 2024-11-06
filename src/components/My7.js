import React, { Component } from "react";

class My7 extends Component{
    constructor(){
        super()
        //alert('constructor') Uncomment this and see it is called twice. Why?
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(
            {
                //Q.cant have any statement other than assignments? putting an alert doesn't compile
                //A. It is evident that setState() method is expecting a json object 
                //or may be other variable.
                count: this.state.count + 1
            }
        )
        console.log(this.count)   //doesnt throw error/exception but show 'undefined'
        console.log(this.state.count)// Notice the difference in value printed on page vs console
                                    //console value is 1 less
    }

    render(){
        return <div>
                    <h1> Count : {this.state.count} </h1>
                    <button onClick={() => this.increment()}>Increment</button>
               </div>
    }
}

export default My7