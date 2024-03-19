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

export const contactsReducer = contactsSlice.reducer;

// Редюсер для обробки контактів
// export const contactsReducer = createReducer(
//   initialState.contacts,
//   (builder) => {
//     builder
//       .addCase(addContacts, (state, action) => {
//         // return [action.payload, ...state];
//         state.unshift(action.payload);
//       })
//       .addCase(deleteContacts, (state, action) => {
//         // return state.filter((contact) => contact.id !== action.payload);
//         const index = state.findIndex(
//           (contact) => contact.id === action.payload
//         );
//         state.splice(index, 1);
//       });
//   }
// );

// export const filterReducer = createReducer(initialState.filter, (builder) => {
//   builder.addCase(setFilteredContacts, (state, action) => {
//     return action.payload;
//   });
// });

// Редюсер для обробки контактів
// export const contactsReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case addContacts.type: {
//       return [action.payload, ...state];
//     }
//     case deleteContacts.type: {
//       return state.filter((contact) => contact.id !== action.payload);
//     }
//     default:
//       return state;
//   }
// };

// Редюсер для обробки фільтра
// export const filterReducer = (state = initialState.filter, action) => {
//   switch (action.type) {
//     case setFilteredContacts.type:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// Комбінуємо редюсери
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   filter: "",
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/addTask": {
//       return {
//         ...state,
//         contacts: [action.payload, ...state.contacts],
//       };
//     }
//     case "contacts/deleteTask": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }

//     case "contacts/filter":
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };
