import { combineReducers } from '@reduxjs/toolkit';

import user from "./userSlice";
import category from "./categorySlice"

const rootReducer = combineReducers({
    user,
    category
});

export default rootReducer;
