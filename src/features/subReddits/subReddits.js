import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { selectSubReddits, getSubreddits, selectSubRedditsStatus, selectListedSubReddits, listedSubReddits } from "./subredditsSlice";
import { v4 as uuidv4 } from "uuid";
import { SubRedditButton } from './subRedditButton';
import { Loading } from '../loading/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { selectPosts, selectPostsStatus } from '../posts/postsSlice';

export const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectSubReddits);
  const subredditsStatus = useSelector(selectSubRedditsStatus);
  const areSubsListed = useSelector(selectListedSubReddits);
  const [subRedditsToRender, setSubRedditsToRender] = useState();
  const [display, setDisplay] = useState(); // display style for subredditslist
  const [viewPortWidth, setViewPortWidth] = useState(window.visualViewport.width); // needed to choose inline for subredditslist
  const postsStatus = useSelector(selectPostsStatus);
  const posts = useSelector(selectPosts); // to get the selected subreddit
  const currentSub = postsStatus === 'idle' ? posts[0].data.subreddit_name_prefixed : 'SubReddits';

  // changing display of SubRedditsList 
  const toggleVisible = () => {
    const domSubList = document.getElementsByClassName('SubRedditsList')[0];
    const computedStyles = domSubList && window.getComputedStyle(domSubList);
    const displayDomSubList = computedStyles && computedStyles.getPropertyValue('display');
    if (displayDomSubList === 'flex') {
      setDisplay('none');
    } else {
      setDisplay('flex');
    }
  }

  // if screen gets wider Subredditslist should always be visible 
  const handleResize = () => {
    setViewPortWidth(window.visualViewport.width);
  }
  window.addEventListener('resize', handleResize);

  useEffect(() => {
    subredditsStatus === 'nothing' && dispatch(getSubreddits());
  }, [dispatch, subReddits, subredditsStatus]);

  useEffect(() => {
    if (! areSubsListed && subredditsStatus === 'idle') {
      setSubRedditsToRender(subReddits.map((sub) => {
        return (
          <li key={uuidv4()}>
            <SubRedditButton sub={sub} toggleVisible={toggleVisible} />
          </li>
        );
      }));
      dispatch(listedSubReddits);
    }
  },[areSubsListed, subReddits, dispatch, subredditsStatus]);

  return (
    <div className='SubReddits' >
      <h2 className='subRedditsHeading'> <FontAwesomeIcon icon={faBars} onClick={toggleVisible} className='toggleVisible'/> {currentSub}</h2>
      { subRedditsToRender ? 
        <ul 
          className='SubRedditsList' 
          style={viewPortWidth <= 1170 ? {display: display} : {}}>
          {subRedditsToRender}
        </ul>
        : <Loading fetchState={subredditsStatus} />}
    </div>
  )
}
