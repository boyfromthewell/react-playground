import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "" },
  reducers: {
    CHANGE_COLOR: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { CHANGE_COLOR } = themeSlice.actions;
export default themeSlice.reducer;
