import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, changeFilter }) {
  return (
    <div>
      <h2>Пошук контакту за іменем</h2>
      <div className={css.wraper}>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={changeFilter}
          placeholder="Name"
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
