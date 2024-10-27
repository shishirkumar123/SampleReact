import React, { PureComponent } from "react";

class My26 extends PureComponent{
    render(){
        //This is child of My28
        console.log('PureComponent - (My26) - render') // This prints only once but My27 prints in a loop
        return <div>
            Pure component {this.props.name} 
        </div>

        //Pure components only re renders the class components when there is a difference
        //in shallow comparision of propos and state. This results in performance improvement.
        //This works only in class component
    }
}

export default My26