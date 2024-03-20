import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialContacts = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContacts(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const selectContact = (state) => state.contacts.items;
