import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Shimmer from "./Shimmer";

const GptMoviesSuggestion = () => {
  const shimmer = useSelector((store) => store.gpt.shimmer);
  // const { MoviesResults } = useSelector((store) => store.gpt?.MoviesResults);
  const { MoviesResults, MoviesName } = useSelector((store) => store.gpt);
  //const { MoviesName } = useSelector((store) => store.gpt?.MoviesName);
  //if (!MoviesName) return null;
  if (shimmer) return <Shimmer />;
  if (!MoviesName) return;

  // if(MoviesName.length === 0)return <Shimmer />;
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
