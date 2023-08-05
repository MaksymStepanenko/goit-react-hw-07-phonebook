import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ListContacts.module.css';

import { fetchContactsDataThunk } from 'redux/contactsSlice';


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
