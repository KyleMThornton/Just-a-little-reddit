import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="buttons">
                <button onClick={() => dispatch(increment())}>More</button>
                <button onClick={() => dispatch(decrement())}>Less</button>
            </div>
            <div className="feed">

            </div>
        </div>
    )
}