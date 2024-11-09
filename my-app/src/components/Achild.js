import React from "react";

function Achild(props){
    return <div>
        <button onClick={() => props.handler('Achild')}>Call Parent</button>
    </div>
}

export default Achild