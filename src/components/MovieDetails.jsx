import SelectedMovieContainer from "./SelectedMovieContainer";
import RecommendedContainer from "./RecommendedContainer";
import { useSelector } from "react-redux";
import Header from "./Header";
import MovieDetailHeader from "./MovieDetailHeader";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const MovieDetails = () => {
  const movie = useSelector((store) => store.movies?.selectedMovie);
  useRecommendedMovies(movie?.id);
  return (
    <>
     {/* <Header /> */} 
     <MovieDetailHeader />
      <SelectedMovieContainer />
      <RecommendedContainer />
    </>
  );
};

export default MovieDetails;
