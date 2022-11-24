import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectPosts } from './postsSlice';
import { VideoPost, TextPost, ImagePost } from '../post/post';



export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  let postComponents;

  if (posts[0]) {
    postComponents = posts.map((post) => {
      if (post.data.media) {
        return (
          <VideoPost
            title={post.data.title}
            author={post.data.author_fullname} 
            videoSrc={post.data.media.reddit_video.fallback_url}
          />
        );
      } 
      if (post.data.thumbnail === 'default') {
        return (
          <TextPost 
            title={post.data.title}
            author={post.data.author_fullname} 
          />
        );
      }
      if (post.data.thumbnail)  {
        return (
          <ImagePost 
            title={post.data.title}
            author={post.data.author_fullname} 
            imageSrc={post.data.url} 
          />
        )
      }
    })
  }


  return (
    <div>
      <h2>Posts</h2>
      <ul> {postComponents} </ul>

      <button onClick={() => dispatch(getPosts())}>getPosts</button>
    </div>
  );
}

