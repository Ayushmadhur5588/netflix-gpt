import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  netflix_logo,
  search_icon,
  Supported_Languagues,
  user_icon,
} from "../utils/constants";
import { toggleShow } from "../utils/gptSlice";
import { changeLanguage } from "../utils/langSettingSlice";

const Header1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const showSearchBox = () => {
    dispatch(toggleShow());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen md:px-8 px-2 md:py-2 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="md:w-52 md:h-20 w-20 h-10" src={netflix_logo} alt="Netflix_Logo" />
      {user && (
        <div className="md:p-0 flex">
          {showGptSearch && (
            <select
              className="text-white font-normal rounded-lg mr-5 bg-gradient-to-b from-red-600 to-black"
              onChange={handleLanguageChange}
            >
              {Supported_Languagues.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-green-600 my-auto md:mr-2 mr-4 flex hover:underline font-semibold md:text-lg text-sm md:hover:scale-110 transition duration-500 rounded-lg md:px-2"
            onClick={showSearchBox}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
            <img src={search_icon} className="md:ml-2 md:h-7 md:w-7 md:mr-7 hidden md:inline-block" />
          </button>
          <button
            onClick={handleSignOut}
            className="md:mr-6 mr-4 md:text-lg text-sm font-semibold hover:underline text-white hover:scale-110 transition duration-500"
          >
            Sign Out
          </button>
          <div className="flex flex-col">
            <img
              className="w-10 mx-auto cursor-pointer"
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

export default Header1;
