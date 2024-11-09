import React, { Component } from "react";

class My12 extends Component{
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

    render(){
        if(this.state.isLoggedIn){
            return  <div>
                        <div><h1>Welcome Shishir</h1></div>
                    </div>
        }else{
            return  <div>
                        <div><h1>Please Login</h1></div>
                        <div><button onClick={()=>this.login()}>Login</button></div>
                    </div>
        }
        /*
            Note: We can't put if else inside div tags. not allowed. Because this is JSX. 
        */
    }
}

export default My12