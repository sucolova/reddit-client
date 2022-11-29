import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentsSlice";
import { Comment } from "../comment/comment";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const permalink = props.permalink;
  const [commentsToRender, setCommentsToRender] = useState("");
  let areCommentsFetched = comments[permalink];

  const handleClick = () => {
    dispatch(getComments(permalink));
  }
  useEffect(() => {
    if (areCommentsFetched) {
      setCommentsToRender( comments[permalink].map((comment) => {
        return (
          <Comment body={comment.comment} author={comment.author} key={uuidv4()} /> 
        )
      })
      )

    }
  }, [areCommentsFetched]) // ich will im deparray eigentlich nur areCommentsFetched


  return (
    <div>
      <button onClick={handleClick} > getComments </button>
      <ul>{commentsToRender}</ul>
    </div>
  )
}
