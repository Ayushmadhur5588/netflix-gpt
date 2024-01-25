import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesSuggestion = () => {
  const { MoviesName, MoviesResults } = useSelector((store) => store.gpt);
  if (!MoviesName) return null;
  return (
    <div className="bg-black text-white p-4 m-4 bg-opacity-60">
      {MoviesName.map((movieName, index) => (
        <MoviesList
          key={movieName}
          category={movieName}
          movieList={MoviesResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMoviesSuggestion;
