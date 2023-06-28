import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/postsSlice";

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    const reactions = {
        thumbsUp: "Like",
        heart: "Love",
    }
    
        const reactionButtons = Object.entries(reactions).map(([name, emoji]) => {
            return (
                <div className="emojis">
                    <button
                    key={name}
                    type="button"
                    className="reactionButton"
                    onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))
                    }>
                    {emoji}
                    </button>
                    <div className="count" data-testid="count">{post.reactions[name]}</div>
                </div>
              )
        })
        return <div className="reaction-div">{reactionButtons}</div>
    }

export default ReactionButtons


