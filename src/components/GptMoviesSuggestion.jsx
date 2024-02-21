import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Shimmer from "./Shimmer";

const GptMoviesSuggestion = () => {
  const shimmer = useSelector((store) => store.gpt.shimmer);
  const { MoviesResults, MoviesName } = useSelector((store) => store.gpt);
  if (shimmer) return <Shimmer />;
  if (!MoviesName) return;

  return (
    <div className="bg-black text-white p-4 m-4 bg-opacity-60 rounded-lg">
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
