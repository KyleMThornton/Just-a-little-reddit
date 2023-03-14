import { configureStore } from '@reduxjs/toolkit'
import postFeedReducer from '../features/postFeedSlice'

export const store = configureStore({
  reducer: {
    postFeed: postFeedReducer,
  },
})