import React from 'react'
import { movie_image_url } from '../utils/constants';

const MovieCard = ({movie}) => {
  return (
    <div>
      <img 
      className="mr-5 rounded-lg min-w-44 h-44 hover:scale-100 transition duration-500 cursor-pointer"
      src={movie_image_url + movie.poster_path}
      alt="movie_img"
      />
    </div>
  )
}

export default MovieCard;