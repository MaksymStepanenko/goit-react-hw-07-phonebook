import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setFilter } = filterSlice.actions;

export const selectFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
