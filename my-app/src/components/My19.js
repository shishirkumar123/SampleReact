import React, { Component } from "react";

class My19 extends Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            comments: '',
            car: 'accord' //If you dont default this, and press submit without changing, value is not set. Dont know why?
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })  
    }

    handleCommetsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleCarChange = (event) =>{
        this.setState({
            car: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} has put comment ${this.state.comments} and drives ${this.state.car}`)
        event.preventDefault() //Without this, after submit form data is lost
    }

    render(){
        const {userName, comments, car } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div><label>User Name: </label> <input type = 'text' value={userName} onChange={this.handleUserNameChange}/></div>
                <div><label>Comments: </label> <textarea value={comments} onChange={this.handleCommetsChange}></textarea></div>
                <div>
                    <label>Car</label>
                    <select value = {car} onChange={this.handleCarChange}>
                        <option value = 'accord'>Accord</option>
                        <option value = 'nissan'>Nissan</option>
                        <option value = 'camary'>Camary</option>
                    </select> 
                </div>
                <div><button type="Submit">Submit</button></div>{/* Type = submit makes the enter key invocation possible */}
            </form>
        )
    }
}

export default My19