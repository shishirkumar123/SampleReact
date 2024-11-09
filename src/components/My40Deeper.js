import React, { Component } from "react";
import My40Deepest from "./My40Deepest";
import ContextWithDefault from "./My40";

class My40Deeper extends Component{
    render(){
        return(
            <div>
                Component My40Deeper context {this.context}
                <My40Deepest/>
            </div>
        )
    }
}

My40Deeper.contextType = ContextWithDefault

export default My40Deeper