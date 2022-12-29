import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";


const BulletinBoard = () => {
    const posts = useSelector(state => state.posts);

        const renderPosts = posts.map(post => (
            <div className="posts" key={post.id}>
            <div className="post-data">
                <h3>{post.title}</h3>
                <h5>{post.content.substring(0, 100)}</h5>
                <h6>by Author <i>5 minutes ago</i></h6>
                <div className="icons">
                    <div className="icon">
                        <FaRegThumbsUp className="thumbs"/>
                        <p>0</p>
                    </div>
                    <div className="icon">
                        <FaRegThumbsDown className="thumbs"/>
                        <p>0</p>
                    </div>
                    <div className="icon">
                        <FcLike className="thumbs"/>
                        <p>0</p>
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