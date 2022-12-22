export const Comment = (props) => {
  const body = props.body;
  const author = props.author;

  return (
    <li className="Comment">
      <p className="CommentAuthor">{author}:</p>
      <p className="CommentBody">{body}</p>
    </li>
  )
}
