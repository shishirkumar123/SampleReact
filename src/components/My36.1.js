import React, { Component } from "react";


/*Some stupid error is coming ( A class name is required because I had renamed the file
So had to create a new file My36.1 */
class My36_1 extends Component{
    
    render(){
        const {count, incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    }
}
export default My36_1