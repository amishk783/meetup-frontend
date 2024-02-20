import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = { isUser: !!storedUser, user: storedUser };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      const user = JSON.stringify(action.payload);
      localStorage.setItem("user", user);
      state.isUser = !!action.payload;
      state.user = action.payload;
    },
    removeUser(state) {
      state.isUser = null;
      state.user = null;
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
