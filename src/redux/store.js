import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import usersReducer from "../redux/userSlice";
const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    },
})

export default store;