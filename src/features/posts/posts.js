import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectPosts } from './postsSlice';
import { VideoPost, TextPost, ImagePost } from '../post/post';


export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  const [postsToRender, setPostsToRender] = useState();
  const postsList = postsToRender ? <ul>{postsToRender}</ul> : null;

  useEffect(() => {
    console.log('useEffect in posts')
    if (posts[0]) { // check if posts were already fetched
      setPostsToRender(posts.map((post) => {
        if (post.data.media) { //check for video source 
          if (! post.data.media.reddit_video) return undefined; // if video is no reddit_video (but youtube for example) return
          return (
            <VideoPost
              title={post.data.title}
              author={post.data.author_fullname} 
              videoSrc={post.data.media.reddit_video.fallback_url}
              key={post.data.id}
              permalink={post.data.permalink}
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
              permalink={post.data.permalink}
            />
          )
        }
        return (
          <TextPost 
            title={post.data.title}
            author={post.data.author_fullname} 
            key={post.data.id}
            permalink={post.data.permalink}
          />
        );
      }));
    }

  }, [posts])



  return (
    <div className='Posts'>
      {postsList} 
      <button onClick={() => dispatch(getPosts())}>getPosts</button>
    </div>
  );
}

