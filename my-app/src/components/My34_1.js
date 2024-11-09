import React from "react";

function My34_1({heroName}){
    if(heroName === 'Joker'){
        throw new Error('Not a hero !!')
    }
    return <h1>{heroName}</h1>
}

export default My34_1