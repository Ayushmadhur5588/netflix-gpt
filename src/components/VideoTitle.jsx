import { addPlay } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const [details, setdetails] = useState(false);
  const play = useSelector((store) => store.movies?.play);
  const handleClick = () => {
    dispatch(addPlay(!play));
  };

  const handleDetails = () => {
    setdetails(!details);
  };
  return (
    <div className="w-screen aspect-video absolute text-white md:pl-14 pl-4 md:pt-[15%] pt-[50%] bg-gradient-to-r from-black">
      <h1 className="md:font-bold font-semibold md:text-6xl text-3xl md:mb-14">{title}</h1>
      <p
        className={`md:font-normal font-light md:pt-0 pt-10  ${
          details
            ? `md:text-xl text-base md:w-4/5 w-3/5`
            : `md:text-2xl text-lg md:w-3/5 w-4/5 line-clamp-3 text-ellipsis`
        }`}
      >
        {overview}
      </p>
      <div className="md:text-xl text-base text-black mt-5">
        <button
          className="md:p-4 p-2 md:px-12 px-7 bg-white rounded-lg bg-opacity-50 hover:bg-opacity-90"
          onClick={handleClick}
        >
          {play ? "Pause  | |" : "Play ▶️"}
        </button>
        <button
          className="md:p-4 p-2 md:px-12 px-4 md:ml-5 ml-2 text-white bg-gray-500  rounded-lg bg-opacity-30 hover:bg-opacity-70"
          onClick={handleDetails}
        >
          {details ? "Less Info ⓘ" : "More Info ⓘ"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
