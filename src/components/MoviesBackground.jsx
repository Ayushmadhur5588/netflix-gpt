import React from "react";
import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";

const MovieBackground = ({ videoId }) => {
  useMovie(videoId);
  const trailerVideo = useSelector((store) => store.movies?.movie);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key  +
          "?&autoplay=1&mute=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieBackground;
