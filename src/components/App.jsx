import { useSelector } from 'react-redux';

import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import css from './App.module.css';
import { getIsLoading, getError } from '../redux/contactsSlice';

export const App = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

  return (
    <div className={css.appwrap}>
      {isLoading && !error && <Loader/>}
      <h1> Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};
