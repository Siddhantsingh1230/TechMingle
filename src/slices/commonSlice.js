import { createSlice } from "@reduxjs/toolkit";

// This slice contain all app related slices which are coomonn to whole app

const initialState = {
  mode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches, // false means Light mode , true means Dark Mode
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = commonSlice.actions;

export default commonSlice.reducer;