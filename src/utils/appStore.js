import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langSettingReducer from "./langSettingSlice";

// Load state from local storage
const loadState = () => {
  const serializedState = localStorage.getItem("reduxState");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

// Save state to local storage
const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("reduxState", serializedState);
};

// Load preloaded state from local storage
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

// Subscribe to store changes and save state to local storage
appStore.subscribe(() => {
  saveState(appStore.getState());
});

export default appStore;
