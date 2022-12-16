import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, getPosts, selectPostsStatus } from './postsSlice';
import { VideoPost, TextPost, ImagePost } from '../post/post';
import { Loading } from '../loading/loading';


export const Posts = () => {
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const [postsToRender, setPostsToRender] = useState();
  const postsList = postsToRender ? <ul>{postsToRender}</ul> : null;
  const dispatch = useDispatch();

  useEffect(() => {

    if (! posts[0]) { // fetch r/home on inital load
      dispatch(getPosts('r/Home'))
    }

    if (posts[0]) { // check if posts were already fetched
      setPostsToRender(posts.map((post) => {
        if (post.data.media) { //check for video source 
          if (! post.data.media.reddit_video) return undefined; // if video is no reddit_video (but youtube for example) return
          return (
            <VideoPost
              title={post.data.title}
              author={post.data.author} 
              videoSrc={post.data.media.reddit_video.fallback_url}
              key={post.data.id}
              permalink={post.data.permalink}
              upvoteRatio={post.data.upvote_ratio}
            />
          );
        } 
        if (post.data.url.endsWith('.jpg') || post.data.url.endsWith('.png'))  {
          return (
            <ImagePost 
              title={post.data.title}
              author={post.data.author} 
              imageSrc={post.data.url} 
              key={post.data.id}
              permalink={post.data.permalink}
              upvoteRatio={post.data.upvote_ratio}
            />
          )
        }
        return (
          <TextPost 
            title={post.data.title}
            author={post.data.author} 
            key={post.data.id}
            permalink={post.data.permalink}
            upvoteRatio={post.data.upvote_ratio}
          />
        );
      }));
    }

  }, [posts, dispatch])



  return (
    <div className='Posts'>
      { postsStatus === 'idle' ? postsList : <Loading fetchState={postsStatus} />} 
    </div>
  );
}

