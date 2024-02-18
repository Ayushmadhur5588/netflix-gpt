import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    MoviesResults: null,
    MoviesName: null,
    shimmer: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.MoviesResults = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.MoviesName = action.payload;
    },
    toggleShimmer: (state, action) => {
      state.shimmer = action.payload;
    },
  },
});

export const { toggleShow, addGptMovies, addRecommendedMovies, toggleShimmer } =
  gptSlice.actions;

export default gptSlice.reducer;
