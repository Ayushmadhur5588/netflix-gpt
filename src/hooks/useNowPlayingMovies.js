import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesData = useSelector(
    (store) => store.movies.nowplayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMoviesData && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
