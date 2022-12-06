import { useDispatch } from "react-redux";
import { getPosts } from "../posts/postsSlice";

export const SubRedditButton = (props) => {
  const sub = props.sub;
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(getPosts(sub.data.display_name_prefixed))}>
      {sub.data.display_name_prefixed}
    </button>
  )
}
