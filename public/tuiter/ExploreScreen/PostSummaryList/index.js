import PostSummaryItem from "./PostSummaryItem.js";
import who from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${
        who.map(who => {
            return(PostSummaryItem(who));
        }).join('')
    }
        </ul>
    `);
}
export default PostSummaryList;