
import PropTypes from 'prop-types';
import css from './Contact.module.css';


const Contact = ({ name, number, contactId, deleteContact }) => {
    return (
        <div className={css.contact}>
                <span>{name}: </span>
                <span>{number}</span>
                <button type="button" onClick={() => deleteContact(contactId)}>
                 Видалити
                 </button>
        </div>
    )
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    contactId: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default Contact;
