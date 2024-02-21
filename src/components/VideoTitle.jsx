import { addPlay } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { pause_icon } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const play = useSelector((store) => store.movies?.play);
  const handleClick = () => {
   dispatch(addPlay(!play));
}

  const handleDetails = () => {
    alert("Coming Soon");
  }
  return (
    <div className="w-screen aspect-video absolute text-white pl-14 pt-[15%] bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="font-normal text-2xl w-2/5 pt-5 line-clamp-5 text-ellipsis">{overview}</p>
      <div className="text-xl text-black mt-5">
        <button className="p-4 px-12 bg-white rounded-lg bg-opacity-50 hover:bg-opacity-90"
        onClick={handleClick}>
          {play? ("Pause  | |") : ("Play ▶️")}
          
        </button>
        <button className="p-4 ml-5 px-12 text-white bg-gray-500  rounded-lg bg-opacity-30 hover:bg-opacity-70"
         onClick={handleDetails}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
