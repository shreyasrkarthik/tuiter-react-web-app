import React from "react";
// import NavigationSidebar from "../navigation-sidebar";
// import PostSummaryList from "../post-summary-list";
import ProfilePage from "./profile-page";

const ProfileComponent = () => {

    return (
        <div>
            <div className="row pt-3">
                <div className="col-9 col-lg-6 col-xl-6">
                    <ProfilePage/>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;