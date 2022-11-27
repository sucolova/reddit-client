import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentsSlice";

export const Comments = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const permalink = props.permalink;
    dispatch(getComments(permalink));
    console.log(permalink);
  }


  return (
    <div>
      <button onClick={handleClick} > getComments </button>
    </div>
  )
}
