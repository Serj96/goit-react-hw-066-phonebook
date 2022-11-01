import {Component} from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';





export default class Form extends Component {
    state = {
        number: "",
        name: "",
      }
    
      handleNameChange = e => {
        const { name, value } = e.currentTarget
        this.setState({
          [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmit(this.state);
        this.reset();
      }

      reset = () => {
        this.setState({name: "", number: ""});
      }

      loginInputId = nanoid();

    render() {
        
        const { name } = this.state;
        const handleNameChange = this.handleNameChange;
        const handleSubmit = this.handleSubmit;
        return (
            <div className={css.wraper}>
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor={this.loginInputId}>Name</label>
            <input type="text" name="name" value={name} onChange={handleNameChange} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
            <label htmlFor={this.loginInputId}>Number</label>
            <input
             type="tel"
             name="number"
             value={this.state.number}
             onChange={handleNameChange}
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             />
            <input 
            type="submit" 
            value="Add contact" />
            </form>
        </div>
        )
    }
    
}
