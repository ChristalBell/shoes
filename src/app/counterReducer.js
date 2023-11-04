import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    added: (state) => {
      state.count += 1;
    },
    subtracted: (state) => {
      state.count -= 1;
    },
  },
});

// export const selectCount = (state) => state.count;
export const { added, subtracted } = counterSlice.actions;
export default counterSlice.reducer;
