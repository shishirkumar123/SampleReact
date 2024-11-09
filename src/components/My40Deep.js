import React, { Component } from "react";
import My40Deeper from "./My40Deeper";
import ContextWithDefault from "./My40";


class My40Deep extends Component{
    render(){
        return(
            <div>
                Component My40Deep context {this.context}
                <My40Deeper/>
            </div>
            // <div>Holla</div>
        )
    }
}

My40Deep.contextType = ContextWithDefault
//ContextType limitations
//1. Works only with class component
//2. Only subscribe to a single context.

export default My40Deep