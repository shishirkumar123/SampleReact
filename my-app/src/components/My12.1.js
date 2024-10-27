import React, { Component } from "react";

class My12_1 extends Component{
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
        let message
        if(this.state.isLoggedIn){
            message =   <div><h1>Welcome Shishir</h1></div>
                    
        }else{
            message =   <div><h1>Welcome guest</h1></div>
                        
        }
        return <div>{message}</div>
        /*
            Note: We can't put if else inside div tags. not allowed. Because this is JSX. 
        */
    }
}

export default My12_1