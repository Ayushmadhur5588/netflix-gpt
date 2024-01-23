import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

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
    (nowPlayingMovieList || topratedMoviesList || popularMoviesList || upcomingMoviesList) && (
      <div className="bg-black">
        <div className="-mt-72 z-20 relative pl-14">
          <MoviesList
            category={"Now Playing"}
            movieList={nowPlayingMovieList}
          />
          <MoviesList category={"Popular"} movieList={popularMoviesList} />
          <MoviesList category={"Top rated"} movieList={topratedMoviesList} />
          <MoviesList
            category={"Upcoming Movies"}
            movieList={upcomingMoviesList}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
