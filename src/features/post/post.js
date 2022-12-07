import {Comments} from '../comments/comments';

export const VideoPost = (props) => {
  const title = props.title;
  const videoSrc = props.videoSrc;
  const author = props.author;

  if(props.author) {
    return (
      <div className="videoPost post">
        <p className='title'>{title}</p> 
        <video controls muted width='250'>
          <source src={videoSrc} type='video/mp4'/>
        </video>
        <p className="author">author: {author}</p>
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
        <p className='title'>{title}</p> 
        <p className="author">author: {author}</p>
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
        <p className='title'>{title}</p> 
        <img src={imageSrc} alt='reddit post'/>
        <p className="author">author: {author}</p>
        <Comments permalink={props.permalink} />
      </div>
    )
  }
}


