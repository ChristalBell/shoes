import { createSlice } from "reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  state: { count: 0 },

  ACTIONS: {
    added: (state) => {
      state.count += 1;
    },
    subtracted: (state) => {
      state.count -= 1;
    },
  },
});

export const { added, subtracted } = counterSlice.ACTIONS;
