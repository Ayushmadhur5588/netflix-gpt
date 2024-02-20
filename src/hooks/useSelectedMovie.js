import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addSelectedMovieTrailer } from "../utils/moviesSlice";

const useSelectedMovie = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter((video) => video.type === "Trailer");

      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addSelectedMovieTrailer(trailer));
    };

    getMovie();
  }, [id]); 
};

export default useSelectedMovie;
