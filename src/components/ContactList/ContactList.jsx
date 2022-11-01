import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList ({ title, contacts, deleteContact }) {
    return(
        <div> 
            <h2 className={css.title}>{title}</h2>
            {contacts.map(({ id, name, number }) => {
            return (
            <Contact
             key={id}
             name={name}
             number={number}
             contactId={id}
             deleteContact={deleteContact}
          />
        );
      })}
        </div>
    )
}

ContactList.propTypes = {
    title:  PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func.isRequired,
  };