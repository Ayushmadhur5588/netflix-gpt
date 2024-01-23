import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { background_Img } from "../utils/constants";

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
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullname?.current?.value
    );
    seterrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        fullname.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
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
          src={background_Img}
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
          className=" w-full bg-gradient-to-b from-red-800 p-3 mt-8 text-xl text-center mt-2 rounded-md"
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
