import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoId }) => {
  const play = useSelector((store) => store.movies?.play);
  console.log(play);
  useMovieTrailer(videoId);
  const trailerVideo = useSelector((store) => store.movies?.trailer);
  
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key  +
          "?&autoplay="+play+"&mute=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
