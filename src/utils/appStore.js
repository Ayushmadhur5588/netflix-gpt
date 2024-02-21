import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langSettingReducer from "./langSettingSlice";


const loadState = () => {
  const serializedState = localStorage.getItem("reduxState");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};


const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("reduxState", serializedState);
};


const preloadedState = loadState();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    langsetting: langSettingReducer,
  },
  preloadedState: preloadedState,
});


appStore.subscribe(() => {
  saveState(appStore.getState());
});

export default appStore;
