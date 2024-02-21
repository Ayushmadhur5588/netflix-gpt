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
              className="text-white rounded-lg font-semibold text-lg bg-opacity-5 bg-transparent hover:underline"
              onChange={handleLanguageChange}
            >
              {Supported_Languagues.map((lang) => (
                <option key={lang.identifier} value={lang.identifier} className="text-black">
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white font-semibold ml-4 text-lg hover:underline rounded-lg p-2 mr-4 hover:scale-110 transition duration-500"
            onClick={showSearchBox}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="ml-2 mr-5 text-lg font-semibold hover:underline text-white hover:scale-110 transition duration-500"
          >
            Sign Out
          </button>
          <div className="flex flex-col">
          <img
            className="w-10 mx-auto cursor-pointer"
            src={user_icon}
            alt="user_icon"
          />
         {user.displayName  && <p className="font-semibold text-white mt-2">Hi, {user.displayName}</p>} 
       </div>
        </div>
      )}
    </div>
  );
};

export default Header;
