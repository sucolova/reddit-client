import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { selectSubReddits, getSubreddits, selectSubRedditsStatus, selectListedSubReddits, listedSubReddits } from "./subredditsSlice";
import { v4 as uuidv4 } from "uuid";
import { SubRedditButton } from './subRedditButton';
import { Loading } from '../loading/loading';

export const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectSubReddits);
  const subredditsStatus = useSelector(selectSubRedditsStatus);
  const areSubsListed = useSelector(selectListedSubReddits);
  const [subRedditsToRender, setSubRedditsToRender] = useState();

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

  return (
    <div className='SubReddits'>
      <h2 className='subRedditsHeading'> SubReddits </h2>
      { subRedditsToRender ? 
        <ul className='SubRedditsList'>{subRedditsToRender}</ul>
        : <Loading fetchState={subredditsStatus} />}

    </div>
  )

}
