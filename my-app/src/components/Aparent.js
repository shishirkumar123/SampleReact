import React, { Component } from "react";
import Achild from "./Achild";

class Aparent extends Component{
    clickHandler(childName){
        alert(`Hello ${childName}` )
    }

    render(){
        return <div>
            <Achild  handler = {this.clickHandler}/>
        </div>
    }
}

export default Aparent