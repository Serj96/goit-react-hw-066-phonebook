import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions.js';
// import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ title }) {
  const contacts = useSelector(state =>
    state.contactsReucer.items.filter(contact =>
      contact.name.toLowerCase().includse(state.contactsReucer.filter)
    )
  );

  const dispatch = useDispatch();
  const deleteContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            contactId={id}
            deleteContacts={deleteContacts}
          />
        );
      })}
    </div>
  );
}

// ContactList.propTypes = {
//   title: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
