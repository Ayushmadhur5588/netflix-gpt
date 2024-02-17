import { movie_image_url } from "../utils/constants";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(movie);
  if (!movie.poster_path) return;

  return (
    <div className="">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="ml-5 min-w-44 max-h-52 object-cover hover:scale-105 transition duration-500 cursor-pointer rounded-lg"
          src={movie_image_url + movie.poster_path}
          alt="movie_img"
        />
        {isHovered && (
          <div className="absolute w-52 h-fit bg-black text-white rounded-lg p-2">
            <div className="flex mt-4 ml-2">
            
              <button class="bg-transparent border border-white rounded-full p-2 hover:bg-gray-200 hover:border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </button>

              <span className="ml-4 pt-2 font-semibold text-2xl">Play</span>
            </div>
            <br />
            <span className="text-3xl font-bold">{movie.title}</span>
            <p className="pt-4 line-clamp-4 text-ellipsis text-gray-500 font-semibold text-lg">
              Overview: {movie.overview}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
