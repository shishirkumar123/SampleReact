import React from "react";

function Person({key, person}){ // Notice the {} around parameters. Without {} it doesn't work
    return <div>
       {person.name} is {person.age} year old at location {key}
    </div>
}

export default Person