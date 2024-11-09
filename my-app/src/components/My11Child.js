import React from "react";

function My11Child(props){

    return (
        // <div><button onClick = {props.greetHandler}>Greet Parent</button></div>
        <div><button onClick = { () => props.greetHandler('Childddd')}>Greet Parent</button></div>
    )

}

export default My11Child