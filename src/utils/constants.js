export const netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const user_icon =
  "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const movie_image_url = "https://image.tmdb.org/t/p/w500";

export const background_Img =
  "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg";

export const Supported_Languagues = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "chinese",
    name: "Chinese",
  },
  {
    identifier: "arabic",
    name: "Arabic",
  },
  {
    identifier: "japanese",
    name: "Japanese",
  },
  {
    identifier: "portguese",
    name: "Portguese",
  },
  {
    identifier: "russian",
    name: "Russian",
  },
];
