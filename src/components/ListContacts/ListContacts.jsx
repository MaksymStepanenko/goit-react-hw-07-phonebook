import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ListContacts.module.css';

import { fetchContactsDataThunk,deleteContactThunk } from 'redux/operation';


export const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContactsDataThunk());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id));
  };



  return (
    <ul className={css.ulwrap}>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <li key={id} className={css.list}>
            <p>
              {name} : {phone}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDelete(id)}
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
