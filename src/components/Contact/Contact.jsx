// import PropTypes from 'prop-types';
import css from './Contact.module.css';


const Contact = ({ name, number, contactId, deleteContacts }) => {
  return (
    <div className={css.contact}>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContacts(contactId)}>
        Видалити
      </button>
    </div>
  );
};

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
//   contactId: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default Contact;
