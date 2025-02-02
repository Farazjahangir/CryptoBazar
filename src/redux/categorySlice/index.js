import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.data = action.payload;
    },
    setCategoryLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategory, setCategoryLoading } = categorySlice.actions;

export default categorySlice.reducer;
