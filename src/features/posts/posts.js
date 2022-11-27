import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectPosts } from './postsSlice';
import { VideoPost, TextPost, ImagePost } from '../post/post';



export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  let postComponents;

  if (posts[0]) { // check if posts were already fetched
    postComponents = posts.map((post) => {
      if (post.data.media) { //check for video source 

        if (! post.data.media.reddit_video) return undefined; // if video is no reddit_video (but youtube for example) return
        return (
          <VideoPost
            title={post.data.title}
            author={post.data.author_fullname} 
            videoSrc={post.data.media.reddit_video.fallback_url}
            key={post.data.id}
          />
        );
      } 
      if (post.data.url.endsWith('.jpg') || post.data.url.endsWith('.png'))  {
        return (
          <ImagePost 
            title={post.data.title}
            author={post.data.author_fullname} 
            imageSrc={post.data.url} 
            key={post.data.id}
          />
        )
      }
      return (
        <TextPost 
          title={post.data.title}
          author={post.data.author_fullname} 
          key={post.data.id}
        />
      );


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

