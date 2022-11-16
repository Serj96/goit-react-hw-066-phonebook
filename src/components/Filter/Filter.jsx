// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { filterContact } from '../../redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const filter = useSelector(state => state.contactsReducer.filter);
  const dispatch = useDispatch();

  const changeFilter = data => {
    dispatch(filterContact(data));
  };
  return (
    <div>
      <h2>Пошук контакту за іменем</h2>
      <div className={css.wraper}>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => changeFilter(e.target.value)}
          placeholder="Name"
        />
      </div>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
