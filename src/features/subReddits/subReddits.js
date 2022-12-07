import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { selectSubReddits, getSubreddits, selectSubRedditsStatus, selectListedSubReddits, listedSubReddits } from "./subredditsSlice";
import { v4 as uuidv4 } from "uuid";
import { SubRedditButton } from './subRedditButton';


export const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectSubReddits);
  const subredditsStatus = useSelector(selectSubRedditsStatus);
  const areSubsListed = useSelector(selectListedSubReddits);
  const [subRedditsToRender, setSubRedditsToRender] = useState();



  useEffect(() => { // maybe infinite loop if rejected
    subredditsStatus === 'nothing' && dispatch(getSubreddits());
    console.log('useEffect subreddits fetching', subredditsStatus)
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
      <ul className='SubRedditsList'>{subRedditsToRender}</ul>
    </div>
  )

}
