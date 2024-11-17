import React from "react";

const My5 = props => {
    return  (   
        <div>     
            <div><h1>My5</h1></div>       
            <div>Name {props.fname} {props.lname}</div>    
        </div> 
    )      
}

//If you do it through class component, then need to use 'this as well-
/*

class PChild extends Component{
    render(){
        return <div>From Child {this.props.fName}</div>
    }
}
*/

export default My5