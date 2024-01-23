import lang from "../utils/languagueConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.langsetting.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-6/12 text-black text-lg grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[language].placeholder}
        />
        <button className="bg-gradient-to-b from-red-600 to-black m-4 text-white text-xl rounded-lg col-span-3">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
