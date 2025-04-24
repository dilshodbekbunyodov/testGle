import {configureStore} from "@reduxjs/toolkit";
import login from "../features/Login/login.js";
import user from "../features/User/User.js";

export const store = configureStore({
    reducer: {
        login: login,
        user: user
    }
})


export default store