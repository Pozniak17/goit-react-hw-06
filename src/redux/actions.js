import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContacts = createAction("contacts/addTask", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContacts = createAction("contacts/deleteTask");

export const setFilteredContacts = createAction("contacts/filter");

// export const addContacts = (name, number) => {
//   return {
//     type: "contacts/addTask",
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContacts = (contactId) => {
//   return {
//     type: "contacts/deleteTask",
//     payload: contactId,
//   };
// };

// export const setFilteredContacts = (filteredContacts) => ({
//   type: "contacts/filter",
//   payload: filteredContacts,
// });
