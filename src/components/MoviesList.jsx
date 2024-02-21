import MovieCard from "./MovieCard";

const MoviesList = ({ category, movieList }) => {
  return (movieList &&  (
    <div>
      <h2 className="md:text-4xl text-xl md:font-bold font-medium text-white py-6  md:hover:text-sky-500 cursor-default ">
        {category}
      </h2>
       <div className="flex overflow-x-scroll rounded-md">
        {movieList.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>)
  );
};

export default MoviesList;
