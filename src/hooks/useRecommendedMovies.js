import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useRecommendedMovies = (id) => {
  const dispatch = useDispatch();
  const getRecommendedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/recommendations",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRecommendedMovies(json.results));
  };

  useEffect(() => {
     getRecommendedMovies();
  }, [id]);
};

export default useRecommendedMovies;
