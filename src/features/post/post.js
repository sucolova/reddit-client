export const VideoPost = (props) => {
  const title = props.title;
  const videoSrc = props.videoSrc;
  const author = props.author;

  if(props.author) {
    return (
      <div className="postContainer">
        <h2>{title}</h2> 
        <video controls width='250'>
          <source src={videoSrc} type='video/mp4'/>
        </video>
        <h4>author: {author}</h4>
      </div>
    )
  }
}


export const TextPost = (props) => {
  const title = props.title;
  const author = props.author;

  if(props.author) {
    return (
      <div className="postContainer">
        <h2>{title}</h2> 
        <h4>author: {author}</h4>
      </div>
    )
  }
}


export const ImagePost = (props) => {
  const title = props.title;
  const author = props.author;
  const imageSrc = props.imageSrc;

  if(props.author) {
    return (
      <div className="postContainer">
        <h2>{title}</h2> 
        <img src={imageSrc} alt='reddit post'/>
        <h4>author: {author}</h4>
      </div>
    )
  }
}


