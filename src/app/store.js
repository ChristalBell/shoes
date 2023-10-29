import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterReducer";
export const store = configureStore({
  ACTIONS: {
    reducer: counterSlice.reducer,
  },
});
