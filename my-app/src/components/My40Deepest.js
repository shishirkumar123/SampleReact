import React, { Component } from "react";
import { Consumer, ConsumerWithDefault } from "./My40";

class My40Deepest extends Component{
    render(){
        return <div>
                <div>Deepest component</div>
                <div>
                    <ConsumerWithDefault>
                        {
                            (userName) => {
                                return <div>Hello {userName}</div> //TODO: Fix neeeded: Always default value is
                                                                // printing (set in My40.js)
                                                                //Not the one passed from App.js
                                //https://www.youtube.com/watch?v=A9WlkhdLnn0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=40
                            }
                        }    
                    </ConsumerWithDefault>   
                </div>
        </div>
    }
}

export default My40Deepest