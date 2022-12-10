import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getComments, selectComments } from "./commentsSlice";
import { Comment } from "../comment/comment";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash, faComment } from "@fortawesome/free-solid-svg-icons";

export const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const permalink = props.permalink;
  const [commentsToRender, setCommentsToRender] = useState();
  const [showComments, setShowComments] = useState(false);
  const areCommentsFetched = comments[permalink]; // true if store.comments has a property permalink, it only has this property, if the comments for the post, it is in were fetched
  const commentsList = commentsToRender ? <ul>{commentsToRender}</ul> : null; 
  // console.log('comments were rendered')

  const handleClick = () => {
    dispatch(getComments(permalink));
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  }

  useEffect(() => { // this way comments are only updated if they are fetched
    console.log('useEffect in Comments');
    if (areCommentsFetched) { // still need that condition, because useEffect always runs in the first render
      setCommentsToRender( comments[permalink].map(
        (comment) => {
          return (
            <Comment body={comment.comment} author={comment.author} key={uuidv4()} /> 
          )
        }
      ));
    }
    // eslint-disable-next-line
  }, [areCommentsFetched]) // the other dependencies are not neccessary, and would cause the effect to run to often.


  return (
    <div className="Comments">
      {! showComments ? 
        <FontAwesomeIcon icon={faComment} onClick={handleClick} /> 
        : <FontAwesomeIcon icon={faCommentSlash} onClick={handleClick} />}


      {showComments && commentsList}
    </div>
  )
}
