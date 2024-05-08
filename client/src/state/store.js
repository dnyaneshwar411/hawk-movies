import { configureStore } from "@reduxjs/toolkit";
import { get, userSlice } from "./user.slice";
import { moviesSlice } from "./movies.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice
  }
});

store.dispatch(get());