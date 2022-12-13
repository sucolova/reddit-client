import {Comments} from '../comments/comments';

export const VideoPost = (props) => {
  const title = props.title;
  const videoSrc = props.videoSrc;
  const author = props.author;

  if(props.author) {
    return (
      <div className="videoPost post">
        <h3 className='title'>{title}</h3> 
        <video controls muted width='100%'>
          <source src={videoSrc} type='video/mp4'/>
        </video>
        <p className="author">posted by <b>{author}</b></p>
        <Comments permalink={props.permalink} />
      </div>
    )
  }
}


export const TextPost = (props) => {
  const title = props.title;
  const author = props.author;

  if(props.author) {
    return (
      <div className="textPost post">
        <h3 className='title'>{title}</h3> 
        <p className="author">posted by <b>{author}</b></p>
        <Comments permalink={props.permalink} />
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
      <div className="imagePost post">
        <h3 className='title'>{title}</h3> 
        <div className='imageContainer'>
          <img src={imageSrc} alt='reddit post'/>
        </div>
        <p className="author">posted by <b>{author}</b></p>
        <Comments permalink={props.permalink} />
      </div>
    )
  }
}


