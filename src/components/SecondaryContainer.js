import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import { netflix_logo } from "../utils/constants";

const SecondaryContainer = () => {
  const nowPlayingMovieList = useSelector( (store) => store.movies?.nowplayingMovies);
  const topratedMoviesList = useSelector(
    (store) => store.movies?.topratedMovies
  );
  const popularMoviesList = useSelector((store) => store.movies?.popularMovies);
  const upcomingMoviesList = useSelector(
    (store) => store.movies?.upcomingMovies
  );
  return (
    (nowPlayingMovieList ||
      topratedMoviesList ||
      popularMoviesList ||
      upcomingMoviesList) && (
      <div className="bg-black">
        <div className="-mt-64 z-20 relative pl-14">
          <MoviesList category={"Now Playing"}  movieList={nowPlayingMovieList} />
          <MoviesList category={"Popular"} movieList={popularMoviesList} />
          <MoviesList category={"Top rated"} movieList={topratedMoviesList} />
          <MoviesList category={"Upcoming Movies"} movieList={upcomingMoviesList} />
        </div>
        <div className="w-screen text-center text-white bg-gradient-to-t from-red-900">
        <img className="w-52 mx-auto mt-36 mb-5" src={netflix_logo} alt="Netflix_Logo" />
        <p className="text-sky-400 text-sm">Terms & Privacy Notice Send Us Feedback Help</p>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
