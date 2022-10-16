import PostSummaryList from "../PostSummaryList/index.js";

const PostSummary = () => {
    return(`
    <div class="row">
        <div class="col-10">
            <i class="fas fa-search" style=" position: absolute; padding: 10px;min-width: 40px;"></i>
            <input type="text"
                style="padding-left: 30px;text-align: left; border-radius: 18px; height: 35px;
                 width: 100%; border-width: 0px; "
                   placeholder="Search Twitter"/>
            </span>
        </div>
        <div class="col-2">
            <a href="explore-settings.html"><i class="fas fa-cog fa-2x pt-1"></i></a>
        </div>
    </div>
        <div class="row">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="for-you-tab"
                        data-mdb-toggle="tab"
                        href="#foryou"
                        role="tab"
                        aria-controls="foryou"
                    >For You</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="trending-tab"
                        data-mdb-toggle="tab"
                        href="#trending"
                        role="tab"
                        aria-controls="trending"
                    >Trending</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="news-tab"
                        data-mdb-toggle="tab"
                        href="#news"
                        role="tab"
                        aria-controls="news"
                    >News</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="sports-tab"
                        data-mdb-toggle="tab"
                        href="#sports"
                        role="tab"
                        aria-controls="sports"
                    >Sports</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link d-none d-md-block"
                        id="entertainment-tab"
                        data-mdb-toggle="tab"
                        href="#entertainment"
                        role="tab"
                        aria-controls="entertainment"
                    >Entertainment</a
                    >
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane active border-top border-start border-end border-bottom" id="foryou"
             role="tabpanel" aria-labelledby="for-you-tab">
                <div class="row ">
                    <div class="wd-container pt-1">
                        <img src="ExploreComponent/images/starship.webp"
                             class="wd-image-border"
                             width="100%"
                             height="100%"
                        >
                        <div class="wd-bottom-left"  style="margin-top: -40px"> SpaceX's Starship</div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                Trending
            </div>
            <div class="tab-pane" id="news" role="tabpanel" aria-labelledby="news-tab">
                News
            </div>
            <div class="tab-pane" id="sports" role="tabpanel" aria-labelledby="sports-tab">
                Sports
            </div>
            <div class="tab-pane" id="entertainment" role="tabpanel" aria-labelledby="entertainment-tab">
                Entertainment
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default PostSummary;