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
    seterrorMessage(null);
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
          if (error.code === "auth/email-already-in-use") {
            seterrorMessage("Email already exists");
          } else {
            seterrorMessage(errorCode + errorMessage);
          }
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
          if (error.code === "auth/invalid-credential") {
            seterrorMessage("Password is not valid");
          } else {
            seterrorMessage(errorCode + errorMessage);
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:w-screen" src={background_Img} alt="Background_Img" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:w-3/12 w-9/12 h-fit z-50 top-0 bottom-0 mx-auto right-0 left-0 md:my-auto md:p-12 p-8 my-20 text-white rounded-md bg-black bg-opacity-80"
      >
        <h1 className="mb-6 font-normal md:text-4xl text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
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
        {!isSignInForm && (
          <>
            <p className="text-sm text-gray-500">8 characters minimum</p>
            <p className="text-sm text-gray-500">One lowercase letter</p>
            <p className="text-sm text-gray-500">One uppercase letter</p>
            <p className="text-sm text-gray-500">One number</p>
            <p className="text-sm text-gray-500">One special character</p>
          </>
        )}
        <p className="text-red-500 font-light text-base">{errorMessage}</p>

        <button
          className="w-full bg-gradient-to-b from-red-800 p-3 hover:bg-black md:text-xl text-lg text-center mt-2 rounded-md"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-6 text-base text-gray-400 font-extralight">
          <span onClick={toggleSigninform}>
            {isSignInForm ? "New to Netflix? " : "Already Registered, "}
          </span>
          <span
            className="cursor-pointer hover:underline text-white font-light"
            onClick={toggleSigninform}
          >
            {isSignInForm ? "Sign up" : "SignIn"}
          </span>

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
