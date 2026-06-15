import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "./middleware/authMiddleware";
import authReducer from "./authSlice.js";

export const stores = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authMiddleware),
})