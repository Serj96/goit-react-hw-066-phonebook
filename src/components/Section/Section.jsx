import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({title, children}) => {
    return <div className={css.section}>
        {title && <h1 className={css.title}>{title}</h1>}
        {children}
    </div>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export default Section