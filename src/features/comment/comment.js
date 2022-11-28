
export const Comment = (props) => {
  const body = props.body;
  const author = props.author;

  return (
    <div>
      <p>{body}</p>
      <p>by:{author}</p>
    </div>
  )
}
