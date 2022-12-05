import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { selectSubReddits, getSubreddits } from "./subredditsSlice";


export const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectSubReddits);
  const [subRedditsToRender, setSubRedditsToRender] = useState();


  useEffect(() => { // maybe infinite loop if rejected
    ! subReddits[0] && dispatch(getSubreddits()); // check for subReddits to only fetch once, because useEffect runs twice (maybe because of strict mode)
    console.log('useEffect subreddits fetching')
  }, [dispatch, subReddits]);

  useEffect(() => {
    if (subReddits[0]) {
      setSubRedditsToRender(subReddits.map((sub) => {
        return <li>{sub.data.display_name_prefixed}</li>; // needs a key
      }))
    }
  },[subReddits]);


  return (
    <div>
      <h1>SubReddits</h1>
      <ul>{subRedditsToRender}</ul>
    </div>
  )

}
