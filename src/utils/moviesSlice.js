import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    trailer: null,
    upcomingMovies: null,
    topratedMovies: null,
    popularMovies: null,
    trendingMovies: null,
    selectedMovie: null,
    selectedMovieTrailer: null,
    recommendedMovie: null,
    play : true
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
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addSelectedMovieTrailer: (state, action) => {
      state.selectedMovieTrailer = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovie = action.payload;
    },
    addPlay: (state, action) => {
      state.play = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addSelectedMovie,
  addSelectedMovieTrailer,
  addRecommendedMovies,
  addPlay
} = moviesSlice.actions;

export default moviesSlice.reducer;
