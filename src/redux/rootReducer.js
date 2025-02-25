import { combineReducers } from '@reduxjs/toolkit';

import user from "./userSlice";
import category from "./categorySlice"
import fullScreenLoader from "./fullScreenLoaderSlice"

const rootReducer = combineReducers({
    user,
    category,
    fullScreenLoader
});

export default rootReducer;
