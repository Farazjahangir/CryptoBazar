import { combineReducers } from '@reduxjs/toolkit';

import user from "./userSlice";
import category from "./categorySlice"
import fullScreenLoader from "./fullScreenLoaderSlice"
import cart from "./cartSlice"

const rootReducer = combineReducers({
    user,
    category,
    fullScreenLoader,
    cart
});

export default rootReducer;
