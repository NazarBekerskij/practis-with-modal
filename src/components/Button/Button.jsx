import { Component } from "react";
import style from "./Button.module.css"

class Button extends Component{
    render(){
        return(
            <button onClick={this.props.onClick} className={style.btn} type="button">fill in contact details</button>
        )
    }
}

export default Button