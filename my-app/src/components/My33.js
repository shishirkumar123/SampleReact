import React, { Component } from "react";
import ReactDOM from "react-dom"

function My33() {
    return ReactDOM.createPortal(
        <h1>Portal demo</h1>,
        document.getElementById('portal-root') //Refer index.html
    )

    /**
     * Till now we always had the root element as -<div id="root">
     * But this component is not inside root, but at the same level. 
     * Inspect element and verify. See the advantage in below video:
     * https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31
     */
}

export default My33