import { useSelector } from "react-redux";
import SelectedVideoBackground from "./SelectedVideoBackground";
import VideoTitle from "./VideoTitle";

const SelectedMovieContainer = () => {
  const movie = useSelector((store) => store.movies?.selectedMovie);
  const { original_title, overview, id } = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <SelectedVideoBackground videoId={id} />
    </div>
  );
};

export default SelectedMovieContainer;
