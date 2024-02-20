import { movie_image_url } from "../utils/constants";
import { useState } from "react";
import { addSelectedMovie } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!movie.poster_path) return;

  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
    navigate("/browsemovie");
  };

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="ml-5 min-w-44 max-h-52 overflow-hidden object-cover hover:scale-110 transition duration-500 cursor-pointer rounded-lg"
          src={movie_image_url + movie.poster_path}
          alt="movie_img"
          onClick={handleClick}
        />
        {isHovered && (
          <div className="w-52 h-fit bg-black text-white rounded-lg p-2">
            <div className="flex mt-4 ml-2">
              <button className="bg-transparent border border-white rounded-full p-2 hover:bg-gray-200 hover:border-gray-400"
              onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </button>

              <span className="ml-4 pt-2 font-semibold text-2xl">Play</span>
            </div>
            <br />
            <span className="text-3xl font-bold">{movie.title}</span>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
