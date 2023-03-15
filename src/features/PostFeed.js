import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './postFeedSlice'
import './PostFeed.css'

export function PostFeed() {
  const dispatch = useDispatch()
  const feed = useSelector((state) => state.postFeed)

  return (
    <div>
        <div className='buttons'>
          <button
            className='upDownButtons'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className='upDownButtons'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className='feed'>
            {feed.map((post, index) => (
                <><div key={index} className="postBox"><h2>{post.title}</h2><h3>{post.content}</h3><p>{post.sub}</p></div></>
            ))}
        </div>
    </div>
  )
}

