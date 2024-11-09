import React, { Component } from "react";
import My34_1 from "./My34_1";
import My34_2ErrorBoundary from "./My34_2ErrorBoundary";

/*
The error page was not getting displayed. 
So had to restart the server.
*/
class My34 extends Component{
    render(){
        return <div>
            <My34_2ErrorBoundary>
                <My34_1 heroName = "Batman"/>
            </My34_2ErrorBoundary>
            
            <My34_1 heroName = "Superman"/>
            
            <My34_2ErrorBoundary>
                <My34_1 heroName = "Joker"/> {/* This will throw error */}
            </My34_2ErrorBoundary>
        </div>
    }
}

export default My34