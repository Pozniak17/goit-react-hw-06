import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    setFilteredContacts(state, action) {
      return action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
