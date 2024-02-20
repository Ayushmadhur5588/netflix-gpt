import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import { netflix_logo } from "../utils/constants";

const RecommendedContainer = () => {
  const recommendedMovies = useSelector(
    (store) => store.movies?.recommendedMovie
  );
  return (
    recommendedMovies && (
      <div className="bg-black">
        <div className="-mt-64 z-20 relative pl-14">
          <MoviesList
            category={"Recommended Movies"}
            movieList={recommendedMovies}
          />
        </div>
        <div className="w-screen text-center text-white bg-gradient-to-t from-red-900">
          <img
            className="w-52 mx-auto mt-36 mb-5"
            src={netflix_logo}
            alt="Netflix_Logo"
          />
          <p className="text-sky-400 text-2xl">
            Made With Love by ~ Ayush Bhardwaj 
          </p>
          <p className="text-sky-400 text-sm">
            Terms & Privacy Notice Send Us Feedback Help
          </p>
        </div>
      </div>
    )
  );
};

export default RecommendedContainer;
