import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { selectSubReddits, getSubreddits, selectSubRedditsStatus, selectListedSubReddits, listedSubReddits } from "./subredditsSlice";
import { v4 as uuidv4 } from "uuid";
import { SubRedditButton } from './subRedditButton';
import { Loading } from '../loading/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { selectPosts } from '../posts/postsSlice';

export const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectSubReddits);
  const subredditsStatus = useSelector(selectSubRedditsStatus);
  const areSubsListed = useSelector(selectListedSubReddits);
  const [subRedditsToRender, setSubRedditsToRender] = useState();
  let [display, setDisplay] = useState('flex');
  const currentSub = useSelector(selectPosts)[0].data.subreddit_name_prefixed;

  useEffect(() => {
    subredditsStatus === 'nothing' && dispatch(getSubreddits());
  }, [dispatch, subReddits, subredditsStatus]);

  useEffect(() => {
    if (! areSubsListed && subredditsStatus === 'idle') {
      setSubRedditsToRender(subReddits.map((sub) => {
        return (

          <li key={uuidv4()}>
            <SubRedditButton sub={sub} />
          </li>
        );
      }));
      dispatch(listedSubReddits);
    }
  },[areSubsListed, subReddits, dispatch, subredditsStatus]);

  const toggleVisible = () => {
    if (display === 'flex') {
      setDisplay('none');
    } else {
      setDisplay('flex');
    }
  }

  return (
    <div className='SubReddits' >
      <h2 className='subRedditsHeading'> <FontAwesomeIcon icon={faBars} onClick={toggleVisible} className='toggleVisible'/> {currentSub}</h2>
      { subRedditsToRender ? 
        <ul className='SubRedditsList' style={{display: display}}>{subRedditsToRender}</ul>
        : <Loading fetchState={subredditsStatus} />}

    </div>
  )

}
