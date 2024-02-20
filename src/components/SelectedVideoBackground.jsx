import { useSelector } from "react-redux";
import useSelectedMovie from "../hooks/useSelectedMovie";

const SelectedVideoBackground = ({ videoId }) => {
  useSelectedMovie(videoId);
  const trailerVideo = useSelector(
    (store) => store.movies?.selectedMovieTrailer
  );
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default SelectedVideoBackground;
