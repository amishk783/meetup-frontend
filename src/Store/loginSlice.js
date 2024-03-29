import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");





const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenthicated: !!storedToken,
    token: "",
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload);

      state.isAuthenthicated = true;
      state.token = action.payload.token;
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.isAuthenthicated = false;
      state.token = null;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
