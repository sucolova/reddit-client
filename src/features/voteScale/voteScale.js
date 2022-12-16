import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpLong} from '@fortawesome/free-solid-svg-icons';
import {faArrowDownLong} from '@fortawesome/free-solid-svg-icons';

export const VoteScale = (props) => {
  const upvoteRatio = props.upvoteRatio;
  const bottom = upvoteRatio * 100;
  const top = 100 - bottom;
  return (
    <div className='Votes'>
      <div className="VoteScale" style={{background: `linear-gradient( to top, #9580ff ${bottom}%, #21222c ${top}%)`}} >
      </div>
      <div className='voteContainer'>
      <div className='upVote'>
        <FontAwesomeIcon icon={faArrowUpLong} />
        <h4 className='upvoteRatio'>{bottom}%</h4>
      </div>
      <div className='dowVote'>
        <FontAwesomeIcon icon={faArrowDownLong} />
        <h4 className='downvoteRatio'>{top}%</h4>
        </div>
      </div>

    </div>
  )
}
