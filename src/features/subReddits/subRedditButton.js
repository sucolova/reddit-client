import { useDispatch } from "react-redux";
import { getPosts } from "../posts/postsSlice";
import { Avatar } from "dracula-ui";

export const SubRedditButton = (props) => {
  const sub = props.sub;
  const dispatch = useDispatch();
  const toggleVisible = props.toggleVisible;

  return (
    <div className="SubReddit">
      <button className="SubRedditButton" onClick={() =>{
        dispatch(getPosts(sub.data.display_name_prefixed))
        toggleVisible(); // close subredditsList
      }}>
        <Avatar 
          color="purpleCyan"
          variant="normal"
          borderVariant="large"
          title={sub.data.display_name} 
          src={sub.data.icon_img}
        />
        <h4> 
          {sub.data.display_name}
        </h4>
      </button>
    </div>
  )
}
