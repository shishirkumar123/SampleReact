import React from "react";

function My14(){

    const names = ['Tom', 'Dick', 'Harry'] //wont work if you dont use const keyword
    // const nameList = names.map(name => <h1>Hi {name}</h1>)  //Notice error at console :
                                                             //Each child in a list should have a unique "key" prop.
    // const nameList = names.map(name => <h1 key={name}>{name}</h1>) //This wont throw exception. Works fine only if names are unique
    const nameList = names.map((name, index) => <h1 key={index}>{name} at {index}</h1>) // Even better
    // const nameList = names.map((name, index) => <h1 key={key}>{name} at {key}</h1>) // How about this?

    return <div>{nameList}</div>

    // Check this out https://codepen.io/gopinav/pen/gQpepq
    // When to use index as key -
    // 1. The items in your list doesnt have unique key
    // 2. The list is static list and will not change
    // 3. The list will never be ordered or filtered.
    //In the above mentioned cases, the list cases list doesnt behave as expected
   
}

export default My14