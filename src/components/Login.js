import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(false);

  const toggleSigninform = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
          alt="Background_Image"
        />
      </div>

      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-black bg-opacity-80">
        <h1 className="mb-6 font-normal text-4xl">
          {isSignInForm? "Sign In" : "Sign Up"}
          {console.log(isSignInForm)}
        </h1>

        { isSignInForm === false && (
          <div>
            <input
              className="w-full p-3 rounded-md mb-4 bg-gray-700"
              type="text"
              placeholder="Enter First Name"
            />
            <input
              className="w-full p-3 rounded-md mb-4 bg-gray-700"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
        )}
        <input
          className="w-full p-3 rounded-md mb-4 bg-gray-700"
          type="text"
          placeholder="enter email address"
        />
        <input
          className="w-full p-3 rounded-md mb-4 bg-gray-700"
          type="password"
          placeholder="enter password"
        />

        <button className=" w-full bg-red-700 p-3 mt-8 text-xl text-center mt-2 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-6 text-base text-gray-400 font-extralight cursor-pointer">
          <p onClick={toggleSigninform}>
            {isSignInForm? ("New to Netflix? Sign up") : ("Already Registered, SignIn")}
          </p>

          <p className="mt-2 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
