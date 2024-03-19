import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.unshift(action.payload);
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
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
