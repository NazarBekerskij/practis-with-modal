import { Component } from "react";
import style from "./ContactsItem.module.css";

class ContactsItem extends Component {
  render() {
    const { id, firstName, secondName, tell, email } = this.props;
    return (
      <li className={style.card}>
        <h3 className={style.name}>
          {firstName} {secondName}
        </h3>
        <p className={style.phone}>{tell}</p>
        <p className={style.email}>{email}</p>

        <button
          className={style.deleteBtn}
          onClick={() => this.props.onDelete(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactsItem;
