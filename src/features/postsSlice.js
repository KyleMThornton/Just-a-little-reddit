import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    content: 'fart fart fart fart'
}]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        increment(state, action) {
            const { id, content } = action.payload
            state.push(id, content)
        },
        decrement(state, action) {
            state.filter(post => post !== action.payload.id)
        },
    }
})

export const { increment, decrement } = postsSlice.actions;
export default postsSlice.reducer;