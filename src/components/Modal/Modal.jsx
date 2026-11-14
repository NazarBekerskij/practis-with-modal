import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {

    componentDidMount(){
        window.addEventListener("keydown", this.handleEscaClose)
    }   

    componentWillUnmount(){
        window.removeEventListener("keydown", this.handleEscaClose)
    }

    handleEscaClose = (e) => {
        if(e.code === "Escape"){
            this.props.onClick()
        }
    }

    handleBeackDropClose = (e) => {
        if(e.target === e.currentTarget){
            this.props.onClick()
        }
    }

  render() {
    const {onClick, firstName, secondName, email, tell, onToggleInput, onSubmit} = this.props
    return (
      <div onClick={this.handleBeackDropClose} className={style.beackdrop}>
        <div className={style.modal}>
          <form onSubmit={onSubmit} className={style.form}>
            <button onClick={onClick} className={style.close} type="button">x</button>
            <input 
            type="text" 
            className={style.input} 
            name="firstName"
            value={firstName}
            onChange={onToggleInput}
            placeholder="enter your name"
            />
            <input 
            type="text" 
            className={style.input}
            name="secondName"
            value={secondName}
            onChange={onToggleInput}
            placeholder="enter your second name"
            />
            <input 
            type="tell" 
            className={style.input}
            name="tell"
            value={tell}
            onChange={onToggleInput}
            placeholder="enter your tell"
            />
             <input 
            type="email" 
            className={style.input}
            name="email"
            value={email}
            onChange={onToggleInput}
            placeholder="enter your email"
            />
            <button type="submit" className={style.btn}>Add Contacts</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
