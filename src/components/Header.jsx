import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  netflix_logo,
  Supported_Languagues,
  user_icon,
} from "../utils/constants";
import { toggleShow } from "../utils/gptSlice";
import { changeLanguage } from "../utils/langSettingSlice";

const Header = () => {
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
    <div className="absolute z-10 w-screen md:px-8 md:py-2 py-2 px-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="md:w-52 md:h-24 w-20 h-10"
        src={netflix_logo}
        alt="Netflix_Logo"
      />
      {user && (
        <div className="md:p-6 flex">
          {showGptSearch && (
            <select
              className="text-white rounded-lg md:font-semibold font-normal md:text-lg text-sm bg-opacity-5 bg-transparent md:hover:underline mr-2"
              onChange={handleLanguageChange}
            >
              {Supported_Languagues.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white md:font-semibold font-normal md:ml-4 md:text-lg text-sm md:hover:underline rounded-lg md:p-2 md:mr-4 mr-2 md:hover:scale-110 transition duration-500"
            onClick={showSearchBox}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="ml-2 md:mr-5 mr-2 md:text-lg text-sm md:font-semibold font-normal md:hover:underline text-white md:hover:scale-110 transition duration-500"
          >
            Sign Out
          </button>

          <div className="flex flex-col">
            <img
              className="md:w-10 w-8 mt-2 mx-auto cursor-pointer"
              src={user_icon}
              alt="user_icon"
            />
            {user.displayName && (
              <p className="md:font-semibold font-normal text-white mt-2 hidden md:inline-block">
                Hi, {user.displayName}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
