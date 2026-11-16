import { Component } from "react";
import style from "./ContactsList.module.css"
import ContactsItem from "./ContactsItem";

class ContactsList extends Component {
    render(){
        return(
            <div className={style.contacts}>
                <ul className={style.list}>{this.props.contacts.map((contact) => (
                   <ContactsItem key={contact.id} {...contact}  onDelete={this.props.onDelete}/>
                ))}</ul>
            </div>
        )
    }
}

export default ContactsList