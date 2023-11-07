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
  },
});

export const { added, subtracted, addToCart, multiply } = counterSlice.actions;
export default counterSlice.reducer;
