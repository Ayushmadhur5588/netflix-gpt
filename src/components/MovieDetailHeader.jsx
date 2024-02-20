import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  netflix_logo,
  user_icon,
} from "../utils/constants";


const MovieDetailHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const showSearchBox = () => {
    navigate("/browse");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browsemovie");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

 

  return (
    <div className="fixed z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-52" src={netflix_logo} alt="Netflix_Logo" />
      {user && (
        <div className="p-6 flex">
         
          <button
            className="text-white font-normal text-lg rounded-lg p-2 mr-4"
            onClick={showSearchBox}
          >
            Home Page
          </button>

          <button
            onClick={handleSignOut}
            className="ml-2 text-lg font-semibold hover:underline text-white"
          >
            Sign Out
          </button>
          <img
            className="w-10 ml-5 cursor-pointer"
            src={user_icon}
            alt="user_icon"
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetailHeader;
