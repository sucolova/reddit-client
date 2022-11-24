import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectPosts } from './postsSlice';


export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      <h3>{posts[0] && posts[0].data.title}</h3>
      <video controls width='250'>
        <source src={posts[0].data.media.reddit_video.fallback_url} type='video/mp4'/>
      </video>
      <h4>author: {posts[0].data.author_fullname}</h4>
      <button onClick={() => dispatch(getPosts())}>getPosts</button>
    </div>
  );
}

