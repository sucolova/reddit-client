import { useDispatch } from "react-redux";
import { getPosts } from "../posts/postsSlice";
import { Avatar } from "dracula-ui";

export const SubRedditButton = (props) => {
  const sub = props.sub;
  const dispatch = useDispatch();

  return (
    <div className="SubReddit">
      <button className="SubRedditButton" onClick={() => dispatch(getPosts(sub.data.display_name_prefixed))}>
        <Avatar 
          color="purpleCyan"
          variant="normal"
          borderVariant="large"
          title={sub.data.display_name} 
          src={sub.data.icon_img}
        />
      </button>
      <h4> 
        {sub.data.display_name}
      </h4>
    </div>
  )
}
