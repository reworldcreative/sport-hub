import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
