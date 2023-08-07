import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsDataThunk,
  deleteContactThunk,
  addContactThunk,
} from './operation';


const contactkInitialState = {
  items: [],
  isLoading: false,
  error: null,
};



const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactkInitialState,
  reducers: {
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-----------------------delete---------------------
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------------------------post-------------
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const contactsReducer = contactSlice.reducer;
