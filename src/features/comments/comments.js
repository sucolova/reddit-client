import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentsSlice";
import { Comment } from "../comment/comment";

export const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  let commentsToRender;
  const permalink = props.permalink;

  const handleClick = () => {
    dispatch(getComments(permalink));
    console.log(permalink);
    console.log(comments)
  }

  if (comments[permalink]) {
    console.log('inside map')
    commentsToRender = comments[permalink].map((comment) => {
      return (
        <Comment body={comment.comment} author={comment.author} /> 
      )
    })

  }

  return (
    <div>
      <button onClick={handleClick} > getComments </button>
      <ul>{commentsToRender}</ul>
    </div>
  )
}
