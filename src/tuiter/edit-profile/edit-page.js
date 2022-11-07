import React, {useState} from "react";
import './index.css';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const profileData = (state) => state.profile;

const EditPage = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(profile["firstName"]);
    const [lastName, setLastName] = useState(profile["lastName"]);
    const [bio, setBio] = useState(profile["bio"]);
    const [location, setLocation] = useState(profile["location"]);
    const [website, setWebsite] = useState(profile["website"]);
    const [birthDate, setBirthdate] = useState(profile["dateOfBirth"]);

    const saveUserProfileDetails = () => {
        profile["firstName"] = firstName;
        profile["lastName"] = lastName;
        profile["bio"] = bio;
        profile["location"] = location;
        profile["website"] = website;
        profile["dateOfBirth"] = birthDate;
        dispatch(updateProfile(profile));
    }

    return(
        <div>
            <div className="row">
                <div className="row pt-2 wd-data-font-size">
                    <span className="bi bi-mu wd-color-white col-1 pt-2"></span>
                    <span className="wd-font-color-white fw-bold wd-title-font-size float-left col-9">Edit Profile</span>
                    <span className="row wd-font-color-grey float-left col-2">
                      <button className="btn wd-save-page-style rounded-pill border fw-bold wd-font-color-white float-left" onClick={saveUserProfileDetails}>Save</button>
                  </span>
                </div>
            </div>

            <div className="pt-2"></div>
            <img src={profile["bannerPicture"]}
                 className="profile-banner"
                 width={650}
             alt={"banner"}/>

            <div className="col-sm-3 avatar-container">
                <img src={profile["profilePicture"]} className="rounded-circle profile-avatar" alt="User avatar"/>
            </div>

            {/*<div className="row pt-3">*/}
            {/*    <img src="https://medhaavi.in/wp-content/uploads/2020/07/1_jd8ZKUWtY1AOMwz2CvZG8A.jpg"*/}
            {/*         height={200}*/}
            {/*    />*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <img className="imgB1 col-3 rounded-circle pull-left" src="https://i.dailymail.co.uk/i/pix/2014/03/26/article-0-1C91BEE700000578-336_306x393.jpg"/>*/}
            {/*</div>*/}

            <div className="pt-5"></div>
            <div className="pt-5"></div>
            <div className="pt-2"></div>
            <div className="row border rounded">
                <div className="wd-text-color-grey wd-input-text">Name</div>
                <input className="col-6 wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input className="col-6 wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className="pt-3"></div>
            <div className="row border rounded">
                <div className="wd-text-color-grey wd-input-text">Bio</div>
                <textarea className="wd-form-background wd-text-color-white wd-border-black wd-user-input" placeholder="Enter bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
            </div>

            <div className="pt-3"></div>
            <div className="row border rounded">
                <div className="wd-text-color-grey wd-input-text">Location</div>
                <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>

            <div className="pt-3"></div>
            <div className="row border rounded">
                <div className="wd-text-color-grey wd-input-text">Website</div>
                <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            </div>

            <div className="pt-3"></div>
            <div className="row">
                <div>
                    <span className="wd-text-color-grey wd-input-text">Birth Date</span>
                    <a className="float-right ps-2 wd-remove-underline" href="#">Edit</a>
                </div>

                <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter birth date" value={birthDate} onChange={(e) => setBirthdate(e.target.value)}/>
            </div>

        </div>
    );
}

export default EditPage;