import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMoviesData = useSelector((store) => store.movies.trendingMovies);
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMoviesData && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
