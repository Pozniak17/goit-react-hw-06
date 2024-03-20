import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  name: "",
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState: initialFilters,
  reducers: {
    setFilterName(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilterName } = filtersSlice.actions;

// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filter.name;
