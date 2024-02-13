import { createSlice } from "@reduxjs/toolkit"

const initialState = { isUser: null };

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.isUser = action.payload;
        },
        removeUser(state) {
            state.isUser = null;
        },
    }
    
});
export const userActions = userSlice.actions;

export default userSlice.reducer;