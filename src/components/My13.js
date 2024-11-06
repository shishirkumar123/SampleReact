import React from "react";

let a = ['V','B','N']
let b = [1,2,3]
const c = b.map((x) => x * 2)
const friends = ['Kabeer', 'Meera', 'Amar']
const names = ['Amar', 'Akbar', 'Anthony']
const nameList = names.map((name, key) => <h1>{name} {key}</h1>)


/*
Demostrate that using 'let', variable can change value. using 'const', variable cant change value
When a reference is used, with 'let' value/reference can be reassigned, with 'const' reference
cant be reassigned although the value inside the reference can be changed.
*/
const My13 = () => {
    return <div>
        <div>hohoho {a[1]}</div> 
        <div>hee hee {a}</div>
        <div>hmm {a.forEach((x) => x + ' kumar')}</div>
        <div>aha {a.length}</div>
        <div>oho {a.map((x) => x + ' kumar')}</div>
        <div>here {b.map((x) => x * 2)}</div>
        <div>
            {friends.map((nam) => 'Hi ' + nam)}
            {friends.map(nam => <h6>{nam}</h6>)}
            <div>{c}</div>
        </div>
        <div>
            {nameList}
        </div>
    </div>
}

export default My13