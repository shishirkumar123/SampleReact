import React from "react";

function My29({name}){
    console.log('memo component My29')
    return <div>
        Memo component
        {name}
    </div>
}

export default React.memo(My29) //React.memo(My29) is a higher order component
//React.memo is introduced in version 16.6
// So in package.json, libraries should be equal or higher. e.g-
// "react": "^18.3.1",
// "react-dom": "^18.3.1",