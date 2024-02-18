import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovie } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useMovie = (id) => {
  const dispatch = useDispatch();

  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovie(trailer));
  };

  useEffect(() => {
   getMovie();
  }, []);
};

export default useMovie;
