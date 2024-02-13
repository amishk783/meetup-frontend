import { createSlice } from "@reduxjs/toolkit";

// const initialState = { isAuthenthicated: "false" };

const loginSlice = createSlice({
  name: "login",
  initialState: {isAuthenthicated: false},
  reducers: {
    login(state) {
      state.isAuthenthicated = true;
    },
    logout(state) {
      state.isAuthenthicated = false;
    },
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
