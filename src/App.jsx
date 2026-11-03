import './App.css'
import { Component } from 'react'

import Title from './components/Tite/Tite'
import AddContacts from './components/AddContacts/AddContacts'
import Modal from './components/Modal/Modal'

class App extends Component{
  state = {
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    contacts: [],
    isModal: false,
  }

  toggleModal = () => {
    this.setState((prev) => ({
      isModal: !prev.isModal
    }))
  }

  render(){
    const {isModal} = this.state
    return(
      <div>
      <Title/>

      <AddContacts openModal={this.toggleModal}/>

      {isModal && <Modal closeModal={this.toggleModal}/>}
      </div>
    )
  }
}

export default App
