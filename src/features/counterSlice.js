import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ title: 'title',content: 'content' }]

const counterSlice = createSlice({
  name: 'counter',
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

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer