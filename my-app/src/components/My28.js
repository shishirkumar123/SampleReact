import React, { Component } from "react";
import My26 from "./My26";
import My27 from "./My27";
import My29 from "./My29";

class My28 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Something'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Something'
            })
        }, 2000)
    }

    render(){
        console.log('Parent - (My28) - render')
        return <div>
            Parent Component
            {/* <My26 name = {this.state.name} />
            <My27 name = {this.state.name} /> */}
            <My29 name={this.state.name}/>
        </div>
    }
}

export default My28