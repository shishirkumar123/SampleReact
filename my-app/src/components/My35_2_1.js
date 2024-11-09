import React from "react";

/*
Seems like Java Decorator pattern
*/
const UpdatedComponent = OriginalCmponent => {
    class NewComponent extends React.Component{
        render(){
            return <OriginalCmponent name = 'John Doe'/>
        }
    }
    return NewComponent
}

export default UpdatedComponent