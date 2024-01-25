import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    // recommendedMovies: null,
    MoviesResults: null,
    MoviesName: null,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      //const { recommendedMovies, MoviesResults } = action.payload;
      state.MoviesResults = action.payload;
      // state.recommendedMovies = recommendedMovies;
    },
    addRecommendedMovies: (state, action) => {
      state.MoviesName = action.payload;
    },
  },
});

export const { toggleShow, addGptMovies, addRecommendedMovies } = gptSlice.actions;

export default gptSlice.reducer;
