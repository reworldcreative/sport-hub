import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    authorized: false,
    role: "customer",
  },
  reducers: {
    logIn: (state, action) => {
      state.authorized = true;
      state.role = action.payload ?? "customer";
    },
    logOut: (state) => {
      state.authorized = false;
    },
  },
});

export const { logIn, logOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;
