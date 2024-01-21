import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white pl-14 pt-[15%] bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className="font-normal text-2xl w-2/5 pt-5">{overview}</p>
      <div className="text-xl text-black mt-5">
        <button className="p-4 px-12 bg-white rounded-lg hover:bg-opacity-65">
          Play ▶️
        </button>
        <button className="p-4 ml-5 px-12 bg-white rounded-lg hover:bg-opacity-65">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
