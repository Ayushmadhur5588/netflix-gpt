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
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-52" src={netflix_logo} alt="Netflix_Logo" />
      {user && (
        <div className="p-6 flex">
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
            className="text-white font-normal text-lg bg-gradient-to-b from-red-600 to-black rounded-lg p-2 mr-4"
            onClick={showSearchBox}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
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

export default Header;
