import React, { Component } from "react";
import My11Child from "./My11Child";

class My11ParentSimple extends Component{

    clickHandler(childName){
        alert(`Hi ${childName}`)
    }

    render(){
        return  <My11Child greetHandler={this.clickHandler}/>
    }
}

export default My11ParentSimple