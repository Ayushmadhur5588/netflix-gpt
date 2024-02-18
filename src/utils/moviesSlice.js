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
    childMovie: null,
    movie: null,
    recommendedMovie: null
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
    addChildMovie: (state, action) => {
      state.childMovie = action.payload;
    },
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovie = action.payload;
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
  addChildMovie,
  addMovie,
  addRecommendedMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;
