import NavigationSidebar from "./NavigationSidebar/index.js";
import Index from "./ExploreComponent";
import WhoToFollowList from "./WhoToFollowList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
     <div class="container pt-4 wd-font-size">
        <div class="row">
            <div class="col-3 col-lg-2 col-xl-2">
            ${NavigationSidebar('explore')}
            </div>
            <div class="col-9 col-lg-6 col-xl-6">
            ${Index()}
            </div>
            <div class="col-lg-4 col-xl-4 d-none d-lg-block">
            ${WhoToFollowList()}
            </div>
        </div>
    </div>
    `);
    }
$(exploreComponent);