import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';
const ProfilePage = () => {

    const profileData = useSelector(state => state.profile);
    console.log(profileData)
    return(
        <div>
            <div className="row">
                <div className="col-1 ps-4">
                    <a href={"#foo"} name={"foo"}><i className="bi bi-arrow-left me-3 wd-arrow-color pt-4"></i></a>
                </div>
                <div className="col-11">
                    <div className="wd-font-color-white fw-bold wd-title-font-size" >{profileData["firstName"]} {profileData["lastName"]}</div>
                    <div className="wd-font-color-grey pb-2">{profileData["numberOfTweets"]} Tweets</div>
                </div>
            </div>

            <img src="./gotham.webp"
                 className="profile-banner row"
                 width={650}
                 alt={"banner"}
            />
            <div className="col-sm-3 avatar-container">
                <img src={`nodejs.png`} className="rounded-circle profile-avatar" alt="User avatar"/>
            </div>


            <div className="pt-3 pe-4">
                <Link to={"/tuiter/edit-profile"}>
                    <button className="row btn rounded-pill border pull-right fw-bold wd-font-color-white">Edit Profile</button>
                </Link>
            </div>

            <div className="wd-font-color-white fw-bold wd-title-font-size pt-5" >{profileData["firstName"]} {profileData["lastName"]}</div>
            <div className="wd-font-color-grey">@{profileData["handle"]}</div>
            <hr/>
            <div className="wd-font-color-white pt-3 fw-bold wd-bio-font-size">About {profileData["bio"]}</div>
            <hr/>
            <div className="row pt-3 wd-data-font-size">
                <span className="bi bi-pin-map  wd-font-color-grey float-left col-4">{profileData["location"]}</span>
                <span className="bi bi-balloon wd-font-color-grey float-left col-4"> Born {profileData["dateOfBirth"]}</span>
                <span className="bi bi-calendar-check wd-font-color-grey float-left col-4"> Joined {profileData["dateJoined"]}</span>
            </div>
            <hr/>
            <div className="row pt-2 wd-data-font-size">
                <span className="wd-font-color-grey float-left col-5 float-start"><span className="fw-bold wd-font-color-white">{profileData["followingCount"]}</span> Following</span>
                <br/>
                <span className="wd-font-color-grey float-left col-5 float-end"><span className="fw-bold wd-font-color-white"> {profileData["followersCount"]}</span> Followers</span>
            </div>
            <hr/>
        </div>
    );
}

export default ProfilePage;