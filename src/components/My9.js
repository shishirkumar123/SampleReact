import React, { Component } from "react";

class My9 extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    increment(){

        // this.setState(   //this is not giving desired result. Why?
        //     {           
        //         count: this.state.count + 1
        //     }
        // )


        this.setState(
            prevState => ({
                   count: prevState.count + 1  //demonstrates that incrementFive will work only if 
                                                // count is retrieved from prev state and incremented
            })
        )
    }

    //prevState => {}  vs prevState =>({})

    incrementFive(){
        this.increment() //between multiple method calls, state is maintained but object variables lost?
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render(){
        return  <div>
                    <div>Count: {this.state.count}</div>
                    <div><button onClick={()=>this.incrementFive()}>Increment</button></div>
                </div>
    }
}

export default My9