import React, { Component } from "react";
import { Consumer } from "./My39";

class My39Deepest extends Component{
    render(){
        return <div>
                <div>Deepest component</div>
                <div>
                    <Consumer>
                        {
                            (userName) => {
                                return <div>Hello {userName}</div>
                            }
                        }    
                    </Consumer>   
                </div>
        </div>
    }
}

export default My39Deepest