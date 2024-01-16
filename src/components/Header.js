import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {

  const navigate = useNavigate();
  const handleSignOut = () => {
   
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix_Logo"
      />
      <div className="p-6 flex">
        <img
          className="w-12 mr-2 cursor-pointer"
          src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
          alt="user_icon"
        />
        <button
          onClick={handleSignOut}
          className="ml-2 text-lg font-semibold hover:underline"
        >
        Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
