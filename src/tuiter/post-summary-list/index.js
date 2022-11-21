import PostSummaryItem from "./post-summary-item";
// import { useSelector } from "react-redux";
import posts from "./posts.json"
const PostSummaryList = () => {
    // const posts = useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                posts.map(post => (
                    <div>
                        <PostSummaryItem post={post} key={post._id} />
                    </div>
                ))}
        </ul>
    );
};

export default PostSummaryList;