import React from "react";
import Person from "./Person";

function My15(){
    const persons = [
        {
            id: 1,
            name: 'Tom',
            age: 23
        },

        {
            id: 2,
            name: 'Dick',
            age:33
        },

        {
            id: 3,
            name: 'Harry',
            age: 34
        }
    ]
    //const personList = persons.map(person => <Person key = {person.id} person = {person}/>)
    //Above line through warning: Person: `key` is not a prop. Trying to access it will result in `undefined` being returned. 
    // If you need to access the same value within the child component, you should pass it as a different prop.

    const personList = persons.map(person => <Person person = {person}/>)
    return <div>
        {personList}
    </div>
}

export default My15