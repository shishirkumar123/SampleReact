import React from "react";

//This is child of My23
function My24(){
    const items = [] //TODO: complete this
    return (
        // <div> If you use <div> tag the warning - <div> cannot appear as a child of <tr>.
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Age</td>
        </React.Fragment>
        // </div>
    )
}

export default My24