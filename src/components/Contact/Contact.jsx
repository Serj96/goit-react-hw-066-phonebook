
import PropTypes from 'prop-types'
import css from './Contact.module.css'


const Contact = ({title}) => {
    return (
        <div className={css.contact}>
            <h2 className={css.title}>{title}</h2>
            <ul>
            <li>Roise</li>
            <li>Hermione</li>
            <li>Eden</li>
            </ul>
        </div>
    )
}


Contact.propTypes = {
    title: PropTypes.string,
}

export default Contact;
