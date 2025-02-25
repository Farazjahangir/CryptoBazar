import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const fullScreenLoader = createSlice({
  name: "fullScreenLoader",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleLoader } = fullScreenLoader.actions;

export default fullScreenLoader.reducer;
