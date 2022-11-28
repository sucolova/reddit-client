import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentsSlice";
import { Comment } from "../comment/comment";

export const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  const handleClick = () => {
    const permalink = props.permalink;
    dispatch(getComments(permalink));
    console.log(permalink);
  }

  const commentsToRender = comments.map((comment) => {
    return (
      <Comment body={comment.comment} author={comment.author} /> 
    )
  })

  return (
    <div>
      <button onClick={handleClick} > getComments </button>
      <ul>{commentsToRender}</ul>
    </div>
  )
}
