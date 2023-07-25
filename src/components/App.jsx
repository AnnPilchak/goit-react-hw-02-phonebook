import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

import {Container} from "./App.styled"

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  // метод для додавання нового контакту
  addContact = contact => {
    const { contacts } = this.state;
    //перевіряє чи такий контакт вже існує
    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) return alert(`${contact.name} is already in contacts`);
      this.setState({ contacts: [...contacts, contact] });
  };

  // метод для видалення контакту зі списку контактів
  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  
  // метод для фільтрації
  handleFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
    
  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        
        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilter={this.handleFilter}/>
        <ContactList contacts={filteredContacts} handleClick={this.deleteContact}/>
      </Container>
    )
  }
}
export default App;