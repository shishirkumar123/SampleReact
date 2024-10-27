import React from "react";
import './MyStyle.css'

    function  My17(props){
        console.log(props.applyStyle)
        let className = props.applyStyle ? 'a' : '' 
        return <div>
            <div className = 'a'>Hello</div>
            <div className = {`${className} b`}>Welcome</div>
        </div>
    }


export default My17