import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword , updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSigninform = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    const message = checkValidData(email.current.value, password.current.value, fullname?.current?.value);
    seterrorMessage(message);
    if (message) return; //credentials are faulty then return else go for signup/in

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        fullname.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            seterrorMessage(error.message);
          });
         })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);

          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
          alt="Background_Img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 z-50 h-fit top-0 bottom-0 p-12 mx-auto right-0 left-0 my-auto text-white rounded-md bg-black bg-opacity-80"
      >
        <h1 className="mb-6 font-normal text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm === false && (
          <div>
            <input
              ref={fullname}
              className="w-full p-3 rounded-md mb-4 bg-gray-700"
              type="text"
              placeholder="Enter Full Name"
            />
          </div>
        )}
        <input
          ref={email}
          className="w-full p-3 rounded-md mb-4 bg-gray-700"
          type="text"
          placeholder="enter email address"
        />
        <input
          ref={password}
          className="w-full p-3 rounded-md mb-4 bg-gray-700"
          type="password"
          placeholder="enter password"
        />
        <p className="text-red-500 font-normal text-lg">{errorMessage}</p>
        <button
          className=" w-full bg-red-700 p-3 mt-8 text-xl text-center mt-2 rounded-md"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-6 text-base text-gray-400 font-extralight cursor-pointer">
          <p onClick={toggleSigninform}>
            {isSignInForm
              ? "New to Netflix? Sign up"
              : "Already Registered, SignIn"}
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
