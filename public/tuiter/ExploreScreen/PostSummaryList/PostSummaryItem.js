const PostSummaryItem = (post) => {
    return(`
        <div class="row border-start border-end border-top border-bottom wd-border-color-dark-mode wd-font-size 
        pt-1 pb-1 wd-post-summary-list-font-size">
            <div class="col-8">
                <div class="wd-title pt-1">${post.topic}</div>
                <div class="wd-float-left wd-bold-text wd-font-color-white">${post.userName}</div>
                <i class="fa fa-check-circle wd-float-left pt-1" style="color: white"></i>
                <div class="wd-float-left wd-duration"> - ${post.time}</div>
                <div style="clear;">&nbsp;</div>
                <div class="wd-bold-text wd-font-color-white">
                ${post.title}
                </div>
            </div>
            <div class="col-4">
                <img src=${post.image}
                     class="wd-profile-image pt-1"
                     height="80px"
                />
            </div>
        </div>
    `);
}
export default PostSummaryItem;