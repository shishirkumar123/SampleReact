import React, { Component } from "react";
import My11Child from "./My11Child";

class My11Parent extends Component{
    constructor(props){
        super(props)

        this.state={
           parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }


    render(){
        return  <div>
                    <My11Child greetHandler={this.greetParent}/>                   
                </div>
    }
}

export default My11Parent