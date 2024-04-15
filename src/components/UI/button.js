import React from "react";
import classes from './button.Module.css';

const button = (props) => {
    return <button className={classes.button} type={props.type || button} onClick={props.onClick}>
        {props.children}
    </button>
}

export default button;