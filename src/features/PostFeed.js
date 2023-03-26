import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRedditData } from './postFeedSlice'
import './PostFeed.css'

export function PostFeed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postFeed.posts);
  const status = useSelector((state) => state.postFeed.status);
  const error = useSelector((state) => state.postFeed.error);

  useEffect(() => {
    dispatch(fetchRedditData());
  }, [dispatch])


  return (
    <div>
        <div className='buttons'>
          <button
            className='upDownButtons'
            aria-label="Increment value"
            onClick={() => dispatch()}
          >
            More
          </button>
          <input type='number' id='quantity' min='1' max='20'></input>
          <button
            className='upDownButtons'
            aria-label="Decrement value"
            onClick={() => dispatch()}
          >
            Less
          </button>
          <button onClick={() => dispatch(fetchRedditData())}>
            Fetch Data
          </button>
        </div>
        <div className='feed'>
          {posts.map((post) => (
            <div key={post.id} className='postBox'>
              <h2>{post.title}</h2>
              <p>{post.selftext}</p>
              <h3>{post.subreddit_name_prefixed}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

