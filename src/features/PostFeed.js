import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRedditData, increment, decrement } from './postFeedSlice'
import './PostFeed.css'

export function PostFeed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postFeed.posts);
  const numOfPosts = useSelector((state) => state.postFeed.numOfPosts);
  // const status = useSelector((state) => state.postFeed.status);
  // const error = useSelector((state) => state.postFeed.error);

  useEffect(() => {
    dispatch(fetchRedditData());
  }, [dispatch]);

  const onExpandClick = (arrInd) => {
    let items = [buttonStatus]
    items[arrInd] =- !items[arrInd]
    setButtonStatus(items)
  }

  const feedData = posts.map((post) => (
    <div key={post.id} className='postBox'>
      <h2>{post.title}</h2>
      {post.selftext ? <p>{post.selftext}</p> : null}
      {post.is_video ? <video src={post.secure_media.reddit_video.fallback_url} controls></video> : null}
      {post.post_hint === "image" ? <img src={post.url_overridden_by_dest} alt={post.title}></img> : null}
      {post.post_hint === "link" ? <a href={post.url_overridden_by_dest}>Link to article</a> : null}
      <h3><a href={post.url}target='_blank'rel="noreferrer">{post.subreddit_name_prefixed}</a></h3>
      <button onClick={() => onExpandClick}>Expand</button>
    </div>
  ))
  
  const feedDataToDisplay = feedData.slice(0, numOfPosts)

  return (
    <div>
        <div className='buttons'>
          <button
            className='upDownButtons'
            aria-label="Increment value"
            onClick={numOfPosts <20 ? () => dispatch(increment()) : null}
          >
            More
          </button>
          <span>{numOfPosts}</span>
          <button
            className='upDownButtons'
            aria-label="Decrement value"
            onClick={numOfPosts > 0 ? () => dispatch(decrement()) : null}
          >
            Less
          </button>
        </div>
        <div className='feed'>
          {feedDataToDisplay}
          {feedDataToDisplay.length > 5 ? <h4>That's enough reddit for one day!</h4> : null}
        </div>
    </div>
  )
}

