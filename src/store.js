import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./pages/landingPage/usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
