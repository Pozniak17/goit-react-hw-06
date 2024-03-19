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

// Генератори екшенів
export const { setFilteredContacts } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
