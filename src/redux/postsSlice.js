import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
   {id: '1',
    title:'Learning Reduc Toolkit', 
    content: 'Learning Redux is important',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        thumbsDown: 0,
        heart: 0
    }
 },
];



const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        thumbsDown: 0,
                        heart: 0
                    }
                }
            }
        }
    },
    reactionAdded(state, action) {
        const { postId, reaction } = action.payload;
        const existingPost = state.find(post => post.id === postId);
        if(existingPost) {
            existingPost.reactions[reaction]++
        };
    }
 }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;