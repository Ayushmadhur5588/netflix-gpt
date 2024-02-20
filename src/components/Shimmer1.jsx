import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap bg-black bg-opacity-75 text-white mx-4 p-4 m-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex-1 ml-5 mt-44 shimmer-container">
          <style>
            {`
              @keyframes shimmerAnimation-${index} {
                0% {
                  background-position: -1000px 0;
                }
                100% {
                  background-position: 1000px 0;
                }
              }

              .shimmer-${index} {
                animation: shimmerAnimation-${index} 2s infinite linear;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 60%);
                background-size: 1000px 100%;
                background-color: rgba(0, 0, 0, 0.75); /* Black background color with 75% opacity */
              }
            `}
          </style>
          <div className={`w-48 h-56 rounded-lg shimmer-${index}`}></div>
          <div className={`w-48 h-56 rounded-lg shimmer-${index}`}></div>
          <div className={`w-48 h-56 rounded-lg shimmer-${index}`}></div>
          <div className={`w-48 h-56 rounded-lg shimmer-${index}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
