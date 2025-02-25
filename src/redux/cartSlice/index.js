import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (p) => p.item.id === action.payload.item.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex] = action.payload;
      } else {
        state.cart.push({
          item: action.payload.item,
          quantity: action.payload.quantity,
        });
      }
    },
    incrementQuantity: (state, action) => {
      console.log("action", action)
      const item = state.cart.find((p) => p.item.id === action.payload);
      console.log("item", item)
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (p) => p.item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (p) => p.item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
