import React from "react";

function My22(){
    return (
    // <div>
    //Using Reach.Fragment as a root is better than using <div> because it doesnt add unneccessory node in DOM
    <React.Fragment> 
        <h1>some text</h1>
        <p>inside paragraph</p>
    </React.Fragment>
    //  </div> 
    )
}

export default My22