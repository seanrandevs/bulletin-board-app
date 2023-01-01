import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/postsSlice";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const reactionEmoji = {
    thumbsUp: <FaRegThumbsUp />,
    thumbsDown: <FaRegThumbsDown />,
    heart: <FcLike />,
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
             key={name}
             type="button"
             className="reactionButton"
             onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))
              }
             >
                {emoji} {post.reactions[name]}
            </button>
          )
    })
    return <div>{reactionButtons}</div>
}

export default ReactionButtons