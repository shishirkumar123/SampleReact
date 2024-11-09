/** https://www.youtube.com/watch?v=NdapMDgNhtE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=36 */
import React, { Component } from "react";

class My36 extends Component{
   

    render(){
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default My36