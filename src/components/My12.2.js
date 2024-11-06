import React, { Component } from "react";

class My12_2 extends Component{
    constructor(){
        super()
        
        this.state = {
            isLoggedIn: false
        }
    }

    login(){
        this.setState(
            {
                isLoggedIn:true
            }
        )
    }

    /*NOT TESTED: TODO */ 
    render(){
        
        return this.state.isLoggedIn?
        <div><h1>Welcome Shishir</h1></div>:
        <div><h1>Welcome guest</h1></div>

        /* OR, even shorter
        return this.state.isLoggedIn && <div><h1>Welcome Shishir</h1></div>

        */
        
    }
}

export default My12_2