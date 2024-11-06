import React from "react";
import './MyStyle.css'
import './../appStyles.css'
import styles from './../appStyles.modules.css' //Notice the difference in import statement


    const heading = {
        fontSize: '72px', //attribute must be camel case
        color: 'pink'
    }

    function  My18(props){
        return <div>
            <div style={heading}>Hotel California !!</div>
            <div className="error">Heaven</div>
            <div className={styles.success}>Hell</div> {/* not working */}
        </div>
        //Style vs className
        //Style for dynamic styles that change based on state or props.
        //className for static, reusable styles
    }

export default My18