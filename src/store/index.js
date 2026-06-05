import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./slices/userSlices";

const store = configureStore({
    reducer: {
        // define cac reducer cua cac slide o day
        user: useReducer
    }
})
export default store