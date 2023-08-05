import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'services/api';

const contactkInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

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

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactkInitialState,
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        console.log('pending');
      })
      .addCase(fetchContactsDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        console.log('fulfilled', action.payload);
      })
      .addCase(fetchContactsDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log('rejected', action.payload);
      }),
});

export const { addContact, deleteContact } = contactSlice.actions;

export const getContacts = state => state.contacts.items;

export const contactsReducer = contactSlice.reducer;
