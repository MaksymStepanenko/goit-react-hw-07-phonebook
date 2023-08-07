import { fetchContacts, deleteContactsById, addContact } from 'services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchContactsDataThunk = createAsyncThunk(
  'contacts/fetchContactsDataThunk',
  async (_, thunkApi) => {
    try {
      const contactsData = await fetchContacts();
      return contactsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (id, thunkApi) => {
    try {
      const response = await deleteContactsById(id);
      console.log('Елемент успішно видалений', response);
      return id;
    } catch (error) {
      console.error('Помилка під час видалення елементу', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (data, thunkApi) => {
    try {
      const response = await addContact(data);
      console.log('Елемент успішно доданий', response.data);
      return response.data;
    } catch (error) {
      console.error('Помилка під час додавання елементу', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
