import React, { Component } from "react";


/*Some stupid error is coming ( A class name is required because I had renamed the file
So had to create a new file My36.1 */
class My36_1Error extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render(){
        const {count} = this.state
        return <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
    }
}
export default My36_1Error