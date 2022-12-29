import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {id: '1', title:'Learning Reduc Toolkit', content: 'Learning Redux is good'},
   {id: '2', title:'Slices...', content: 'I would like a slice of pizza.'},
];

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
});

export default postsSlice.reducer;