import { createSlice } from "@reduxjs/toolkit";

const langSettingSlice = createSlice({
  name: "langsetting",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = langSettingSlice.actions;

export default langSettingSlice.reducer;
