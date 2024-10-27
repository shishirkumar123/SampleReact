import React, { Component } from "react";

class My8 extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    increment(){
        this.setState(
            {           
                count: this.state.count + 1  //increment works after multiple clicks.
            },                                  // after button click how is state not lost?
            () => {
                // alert('inside') // called next
                console.log('Inside setState callback', this.state.count)
            }
        )
        // alert('outside') //called first
        console.log('Outside setState', this.state.count)
    }


    render(){
        return  <div>
                    <div>Count: {this.state.count}</div>
                    <div><button onClick={()=>this.increment()}>Increment</button></div>
                </div>
    }
}

export default My8