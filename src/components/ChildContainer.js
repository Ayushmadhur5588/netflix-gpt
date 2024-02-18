import React from "react";
import Header1 from "./Header1";
import Movie from "./Movie";
const ChildContainer = () => {
  console.log("child container ");
  return (
    <div>
      
      <Movie />
      
    </div>
  );
};

export default ChildContainer;
