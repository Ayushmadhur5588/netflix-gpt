// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDHYzO6_rXX1k6vOcIPss57iid-hk0jLUo",
  authDomain: "netflixgpt-93942.firebaseapp.com",
  projectId: "netflixgpt-93942",
  storageBucket: "netflixgpt-93942.appspot.com",
  messagingSenderId: "528751588195",
  appId: "1:528751588195:web:2df4ae41e8b0c5305a9956",
  measurementId: "G-CN0NJZ371R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();