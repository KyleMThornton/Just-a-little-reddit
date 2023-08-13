import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const redditUrl = `https://api.reddit.com/r/popular.json`;

export const fetchRedditData = createAsyncThunk(
  "postFeed/fetchData",
  async () => {
    const response = await axios.get(redditUrl);
    return response.data.data.children.map((post) => post.data);
  }
);

const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState: {
    posts: [],
    state: 'idle',
    error: null,
    numOfPosts: 4
  },
  reducers: {
    increment(state) {
      state.numOfPosts++
    },
    decrement(state) {
      state.numOfPosts--
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRedditData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchRedditData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export const { increment, decrement } = postFeedSlice.actions;
export default postFeedSlice.reducer;
