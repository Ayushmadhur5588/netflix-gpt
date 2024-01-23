import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleShow } = gptSlice.actions;

export default gptSlice.reducer;
