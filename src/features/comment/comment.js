export const Comment = (props) => {
  const body = props.body;
  const author = props.author;

  return (
    <div className="Comment" variant="subtle">
      <p className="CommentAuthor">{author}:</p>
      <p className="CommentBody">{body}</p>
    </div>
  )
}
