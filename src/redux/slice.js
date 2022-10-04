import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      //   state.contacts.push(action.payload);
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
