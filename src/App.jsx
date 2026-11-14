import './App.css'
import { Component } from 'react'

import { nanoid } from 'nanoid'

import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import ContactsList from './components/Contacts/ContactsList'



class App extends Component{

  state = {
    isModal: false,
    firstName: "",
    secondName: "",
    email: "",
    tell: "",
    contacts: []
  }

  componentDidMount(){
    const saveDate = localStorage.getItem("contacts")

    if(saveDate){
      this.setState({
        contacts: JSON.parse(saveDate)
      })
    }
  }

  componentDidUpdate(_, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts)) 
    }
  }

  handleDelete = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  handleToggleModal = () => {
    this.setState((prev) => ({
      isModal: !prev.isModal
    }))
  }

  handleChangeInput = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {firstName, secondName, email, tell} = this.state

    if(
      firstName.trim() === "" || 
      secondName.trim() === "" || 
      email.trim() === "" || 
      tell.trim() === ""){
        return;
      }


      const newContacts = {
        id: nanoid(),
        firstName,
        secondName,
        email,
        tell,
      }

      this.setState((prev) => ({
        contacts: [...prev.contacts, newContacts],
        firstName: "",
        secondName: "",
        email: "",
        tell: "",
        isModal: false,
      }))
  }




 render(){
  const {firstName, secondName, email, tell, contacts} = this.state
  return(
    <div>
     <Button onClick={this.handleToggleModal}/>
     {this.state.isModal && (
      <Modal 
      onClick={this.handleToggleModal}
      firstName={firstName}
      secondName={secondName}
      email={email}
      tell={tell}
      onToggleInput={this.handleChangeInput}
      onSubmit={this.handleSubmit}
      />
     )}

     <ContactsList 
     contacts={contacts}
     onDelete={this.handleDelete}
     />
    </div>
  )
 }
}

export default App
