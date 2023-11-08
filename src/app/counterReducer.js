import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    cartCount: 0,
  },
  reducers: {
    added: (state) => {
      state.count += 1;
    },
    subtracted: (state) => {
      state.count -= 1;
    },
    multiply: (state) => {
      state.count *= 250;
    },
    addToCart: (state) => {
      state.cartCount = state.count;
    },
    emptyCart: (state) => {
      state.count = 0;
      state.cartCount = 0;
    },
  },
});

export const { added, subtracted, addToCart, multiply, emptyCart } =
  counterSlice.actions;
export default counterSlice.reducer;
