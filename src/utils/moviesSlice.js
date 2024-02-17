import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    trailer: null,
    upcomingMovies: null,
    topratedMovies: null,
    popularMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,

} = moviesSlice.actions;

export default moviesSlice.reducer;
