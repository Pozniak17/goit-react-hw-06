const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addTask": {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    }
    case "contacts/deleteTask": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }

    case "contacts/filter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
