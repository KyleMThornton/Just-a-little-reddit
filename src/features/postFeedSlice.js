import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ title: 'title',content: 'content' }]

const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState,
  reducers: {
    increment(state) {
      state.push({title: 'new title', content:'new content'})
    },
    decrement(state) {
      state.pop()
    },
  },
})

export const { increment, decrement } = postFeedSlice.actions
export default postFeedSlice.reducer