import React from "react";

const GreetWithoutJSX = () => {
    //return React.createElement('div', null, 'Hello without JSX')
    // return React.createElement('div', null, 
    //          React.createElement('h1', null,'Hello without JSX')
    // )

    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
            React.createElement('h1', null,'Hello without JSX')
        )
}

export default GreetWithoutJSX