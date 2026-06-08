import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlices";
import loggerMiddleware from "./middleware/loogerMiddleware";
import userMiddleware from "./middleware/userMiddleware";

const store = configureStore({
    reducer: {
        // define cac reducer cua cac slide o day
        user: useReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // them cac middleware o day
        loggerMiddleware,
        userMiddleware
    )
})
export default store