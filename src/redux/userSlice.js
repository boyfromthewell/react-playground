import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    LOGIN: (state, action) => {
      state.value = action.payload;
    },
    LOG_OUT: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { LOGIN, LOG_OUT } = userSlice.actions;
export default userSlice.reducer;
