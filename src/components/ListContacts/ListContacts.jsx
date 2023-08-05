import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ListContacts.module.css';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.ulwrap}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.list}>
            <p>
              {name} : {number}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};
