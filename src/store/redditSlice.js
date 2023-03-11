import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        getPosts(state) {
            
        }
    }
})