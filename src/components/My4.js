import React from "react";

const My4 = () => {
   
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null,'Hello without JSX')
    )
}

//Remove {} and return keyword will also work because there is only one statement

export default My4