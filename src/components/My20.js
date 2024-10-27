import React, { Component } from "react";
import My21 from "./My21";

class My20 extends Component{

    //Mounting method
    constructor(){
        super()
        this.state = {
            name: 'kumar1'
        }
        console.log('My20:constructor')
    }

    //constructor is good for initializing state and bind event handlers to the class instance
    //Never make HTTP call in constructor 
    //Reason - If an HTTP call delays the constructor’s execution, 
    //it may slow down the initial rendering of the component

    static getDerivedStateFromProps(props, state){ //called for every render and re render(update)
        console.log('My20:getDerivedStateFromProps')
        return null;

        //You will get below warning if you use this method without this.state in constroctor -
        //{component} uses getDerivedStateFromProps` but its initial state is undefined. 
        //This is not recommended. Instead, define the initial state by 
        //assigning an object to `this.state` in the constructor. 
        //This ensures that `getDerivedStateFromProps` arguments have a consistent shape.
    }

    //Mounting method
    componentDidMount(){
        console.log('My20:componentDidMount')
    }

    //componentDidMount() is called immediately after a component
    //and all its children component have been rendered to the DOM
    //It causes side effect e.g interact with DOM or make AJAX calls
    //to load data.

    
    //Both mounting and updating. 
    //Avoid changing state or making ajax call here
    changeState = () => {
        this.setState({
            name: 'kumar2'
        })
    }

    render(){
        console.log('My20:render')
        return <div> Life cycle methods My20
            <form>
                <input type='text'/>
                <textarea></textarea>
                <button onClick={this.changeState}>Change state</button>
            </form>
            {/* <My21/> */} {/* Need fix. Uncommenting this leading to infinite loop in console */} 
        </div>
    }
    //render() is the only required method for any component
    //It reads propos and state. Returns JSX.
    //Dont change state or interact with DOM or make ajax calls here
    //Here children component life cycle method is executed.


    //Updating 
    shouldComponentUpdate(){
        console.log('My20:shouldComponentUpdate')
        return true
        //dictates whether a component shoud re-render. rarely used
        //by returning false, it could prevent the default behaviour
        //used for performance optimization
        //no side effect should happen here(http calls)
    }

    //Updating. rarely used.
    getSnapshotBeforeUpdate(prevProps, prevState){ //This must be used along with componentDidUpdate else warning
        console.log('My20:getSnapshotBeforeUpdate')
        //captured some info from the dom like scroll position
        //returns null or a value. This is sent to third param of componentDidUpdate()
        return null //you see warning if you dont have this statement
    }

    //Updating
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('My20:componentDidUpdate')
        //okay to cause side effects, but you should make sure to compare prev and current value first.
    }

    //componentWillUnmount
    componentWillUnmount(){
        console.log('My20:componentWillUnmount')
        //Observation. This is called, when change is made in this file and saved
        //use this for - 
        //cancelling network request, 
        //removing event handlers, 
        //cancelling any sunscriptions,
        //invalidating timers
        //do not call setState method here 
    }

    //Error handling
    //The two error handling methods are called when
    //there is an error during rendering, in a life cycle method
    //or in the constructor of any child component
    
    static getDerivedStateFromError(error){

    }

    //Error handling
    componentDidCatch(){
        console.log('My20:component did catch')
    }

    //rarely used getDerivedStateFromProps()
}

export default My20