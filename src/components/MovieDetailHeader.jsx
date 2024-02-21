import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { netflix_logo, user_icon } from "../utils/constants";

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
    <div className="fixed z-10 w-screen md:px-8 px-2 md:py-2 py-0 bg-gradient-to-b from-black flex justify-between">
      <img className="md:w-52 md:h-24 w-20 h-10 md:mr-0 md:mt-0 mr-4 mt-2" src={netflix_logo} alt="Netflix_Logo" />
      {user && (
        <div className="md:p-6 p-2 flex">
          <button
            className="text-white md:font-semibold font-normal hover:underline hover:scale-110 transition duration-500 md:text-lg text-sm rounded-lg md:p-2 md:mr-4 mr-2"
            onClick={showSearchBox}
          >
            Home
          </button>

          <button
            onClick={handleSignOut}
            className="md:ml-2 md:mr-5 mx-2 md:text-lg text-sm md:font-semibold font-normal hover:scale-110 transition duration-500 hover:underline text-white"
          >
            Sign Out
          </button>
          <div className="flex flex-col">
            <img
              className="w-10 md:mx-auto mx-2 cursor-pointer"
              src={user_icon}
              alt="user_icon"
            />
            {user && (
              <p className="font-semibold text-white mt-2 hidden md:inline-block">
                Hi, {user.displayName}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailHeader;
