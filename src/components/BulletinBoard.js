import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const BulletinBoard = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

        const renderPosts = orderedPosts.map(post => (
            <div className="posts" key={post.id}>
            <div className="post-data">
                <h3>{post.title}</h3>
                <h5>{post.content.substring(0, 100)}</h5>
                <h6><PostAuthor userId={post.userId} /><TimeAgo timestamp={post.date} /></h6>
                <div className="icons">
                    <div className="icon">
                        <FaRegThumbsUp className="thumbs"/>
                        <p>15</p>
                    </div>
                    <div className="icon">
                        <FaRegThumbsDown className="thumbs"/>
                        <p>1</p>
                    </div>
                    <div className="icon">
                        <FcLike className="thumbs"/>
                        <p>20</p>
                    </div>
                </div>
            </div>
        </div>
        ))

  return (
    <div className="bulletin-board">
        <h1>Posts</h1>
          {renderPosts}
    </div>
  )
}

export default BulletinBoard