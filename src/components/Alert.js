import React, { useState } from "react"
function Alert(props) {
    const capitalize = (word) => {
        const w = word.charAt(0).toUpperCase();
        return w + word.slice(1);
    }
    return (
        <div className="alertSpace" style={props.mode} >
        {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show alertBox`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}       
            </div>}
        </div>
    )
}
export default Alert