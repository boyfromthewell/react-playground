import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import themeReducer from "../changeThemeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
