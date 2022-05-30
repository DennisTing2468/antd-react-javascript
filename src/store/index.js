import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileFeature";
import usersSlice from "../services/users/usersSlice";
import authService from "../services/auth/authService";
import { setUseProxies } from "@reduxjs/toolkit/node_modules/immer";

export const store = configureStore({
    reducer: {
        profileFeature: profileReducer,
        users: usersSlice,
        auth: authService
    },
});