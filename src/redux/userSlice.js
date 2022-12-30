import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Tom Brady'},
    {id: '1', name: 'Kevin Durant'},
    {id: '2', name: 'Steph Curry'},
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;