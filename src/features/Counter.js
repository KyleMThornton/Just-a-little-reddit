import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const dispatch = useDispatch()
  const feed = useSelector((state) => state.counter)

  console.log(feed)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
            {feed.map((post, index) => (
                <><div className={index}><h2>{post.title}</h2><p>{post.content}</p></div></>
            ))}
        </div>
      </div>
    </div>
  )
}

