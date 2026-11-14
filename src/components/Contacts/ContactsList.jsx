import { Component } from "react";
import style from "./ContactsList.module.css"

class ContactsList extends Component {
    render(){
        return(
            <div className={style.contacts}>
                <ul className={style.list}>{this.props.contacts.map(({firstName, secondName, email, tell, id}) => (
                    <li key={id}>
                        <h3>{firstName}</h3>
                        <p>{secondName}</p>
                        <p>{tell}</p>
                        <p>{email}</p>
                        <button onClick={() => this.props.onDelete(id)} type="button">Delete</button>
                    </li>
                ))}</ul>
            </div>
        )
    }
}

export default ContactsList