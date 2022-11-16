import { useState } from 'react';
import { addContact } from 'redux/actions';
import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const formSubmit = data => {
    dispatch(addContact(data));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const data = {
      id: nanoid(),
      name,
      number
    }

    formSubmit(data);
    reset();
  };

  const handleNameChange = evt => {
        switch (evt.currentTarget.name) {
            case "name":
                setName(evt.currentTarget.value);
                break;
            
            case "number":
                setNumber(evt.currentTarget.value);
                break;
            
            default:
                return;
        }
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

  

  return (
    <div className={css.wraper}>
      <form action="" onSubmit={handleSubmit}>
        <label >Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label >Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <input type="submit" value="Add contact" />
      </form>
    </div>
  );
}
