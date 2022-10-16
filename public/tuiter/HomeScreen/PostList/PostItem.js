const PostItem = (post) => {
    return(`
        <div>
            <div class="row border-bottom border-top border-start border-end pt-2">
                <div class="col-2">
                    <img src=${post.profileImage} class="wd-profile-image rounded-circle pt-1"/>
                </div>
                <div class="col-10">
                    <div class="wd-float-left wd-bold-text" style="color: white">${post.userName}</div>
                    <i class="fa fa-check-circle pt-1 wd-float-left wd-float-left-side-bar wd-icon-dark-mode"></i>
                    <div class="wd-float-left" style="color: rgb(110,118,125)">@${post.handle}</div>
                    <div> - ${post.time}</div>
                    <div style="color: white">${post.tagline}</div>
                    <div class="row border-thin border-grey border-solid">
                        <img src=${post.descriptionImage} class="wd-post-image pt-1 pb-1"/>
                        <div style="color: white; font-weight: bold;">
                        ${post.topic}
                        </div>
                        <div class="row ps-4 wd-user-handle">
                        ${post.description}
                        </div>
                        <div class="">
                        <i class="fa fa-link wd-icon-grey"><a class="ps-1 wd-hyperlink-grey" href="${post.link}">${post.linkText}</a></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-comment wd-icon"></i>${post.commentsCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-retweet wd-icon"></i>${post.retweetsCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-heart wd-heart-icon"></i>${post.likesCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-upload wd-icon"></i></a></div>
                        <div style="clear:both;">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;