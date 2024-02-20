import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import MovieBackground from "./MoviesBackground";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import MoviesList from "./MoviesList";
import { netflix_logo } from "../utils/constants";

const Movie = () => {
  const movie = useSelector((store) => store.movies.childMovie);
  const { id, original_title, overview } = movie;
  useRecommendedMovies(id);
  const recommendedMovies = useSelector((store) => store.movies.recommendedMovie);
  return (
    <div className="bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <MovieBackground videoId={id} />
      <div className="ml-5">
      <MoviesList category={"Recommendations"}  movieList={recommendedMovies} />
      </div>
      <div className="w-screen text-center text-white bg-gradient-to-t from-red-900">
        <img className="w-52 mx-auto mt-36 mb-5" src={netflix_logo} alt="Netflix_Logo" />
        <p className="text-sky-400 text-sm">Terms & Privacy Notice Send Us Feedback Help</p>
        </div>
    </div>
  );
};

export default Movie;
