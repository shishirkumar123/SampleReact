import React from "react";

function My29({name}){
    console.log('memo component My29')
    return <div>
        Memo component
        {name}
    </div>
}

export default React.memo(My29) //React.memo is introduced in version 16.6