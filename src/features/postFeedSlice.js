import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ title: 'title',content: 'content', sub: "r/subreddit" }]

const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState,
  reducers: {
    increment(state) {
      state.push({title: 'new title', content:'new content', sub: "r/tempsub"})
    },
    decrement(state) {
      state.pop()
    },
  },
})

export const { increment, decrement } = postFeedSlice.actions
export default postFeedSlice.reducer