import { Component } from "react";
import { nanoid } from 'nanoid';
import { Form, Label, Input } from "./ContactForm.styled"

import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  nameInputId = nanoid();
  numberInputId = nanoid();
  
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // метод для зміни значення
  handleChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  // метод для обробки подання форми
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    evt.target.reset();
    this.props.onSubmit({ id: nanoid(), name, number });
    this.setState({
      name: '',
      number: '',
    });
  }
    
  render() {
    const { name, number } = this.state;
    const { nameInputId, numberInputId, handleSubmit, handleChange } = this;
      
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    id={nameInputId}
                    required
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    id={numberInputId}
                    required
          />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    )
  }
}
export default ContactForm;