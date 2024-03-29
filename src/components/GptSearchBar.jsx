import lang from "../utils/languagueConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies, addRecommendedMovies } from "../utils/gptSlice";
import { toggleShimmer } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.langsetting.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    dispatch(toggleShimmer(true));
    const gptquery =
      "Act as a Movie Recommendation System & suggest some movies for query: " +
      searchText.current.value +
      ". Only give me name of 10 Movies, should be comma seperated. For ex: Train to Busan, 3 idiots, Bahubali, Raaz, Conjuring";

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptresults.choices) {
      <h3>Error in response</h3>;
    }
    const movieList = gptresults.choices?.[0]?.message?.content.split(",");
    const promiseArray = movieList.map((movie) => searchTMDBMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(toggleShimmer(false));
    dispatch(addGptMovies(tmdbResults));
    dispatch(addRecommendedMovies(movieList));
  };

  return (
    <div className="md:pt-[10%] pt-[30%] flex justify-center">
      <form
        className="md:w-6/12 w-10/12 text-black md:text-lg text-base grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="md:p-4 p-2 md:m-4 m-2 col-span-9 rounded-lg md:text-lg text-xs"
          type="text"
          placeholder={lang[language]?.placeholder}
          ref={searchText}
        />
        <button
          className="bg-gradient-to-b from-red-600 to-black md:m-4 m-2 text-white md:text-xl text-sm rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
