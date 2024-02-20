import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingMovies);
  if (!movies) return;
  const mainmovie = movies[2];
  const { original_title, overview, id } = mainmovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
