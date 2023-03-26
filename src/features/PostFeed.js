import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRedditData } from './postFeedSlice'
import './PostFeed.css'

export function PostFeed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postFeed.posts);
  // const status = useSelector((state) => state.postFeed.status);
  // const error = useSelector((state) => state.postFeed.error);

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
        </div>
        <div className='feed'>
          {posts.map((post) => (
            <div key={post.id} className='postBox'>
              <h2>{post.title}</h2>
              {post.selftext ? <p>{post.selftext}</p> : null}
              {post.is_video ? <video src={post.secure_media.reddit_video.fallback_url} controls></video> : null}
              {post.post_hint === "image" ? <img src={post.url_overridden_by_dest}></img> : null}
              {post.post_hint === "link" ? <a href={post.url_overridden_by_dest}>Link to article</a> : null}
              <h3>{post.subreddit_name_prefixed}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

