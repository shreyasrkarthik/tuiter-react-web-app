import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './index.css';
import {updateProfile} from "../profile/profile-reducer";

const EditPage = () => {
    const profileArray = useSelector(state => state.profile);
    console.log("Edit Profile")
    console.log(profileArray)
    const dispatch = useDispatch();
    const [editDOBBtn, setEditDOBBtn] = useState(false);
    const [profileData, setProfileData] = useState({
        name: profileArray.name,
        handle: profileArray.handle,
        profilePicture: profileArray.profilePicture,
        bannerPicture: profileArray.bannerPicture,
        bio: profileArray.bio,
        website: profileArray.website,
        location: profileArray.location,
        dateOfBirth: profileArray.dateOfBirth,
        dateJoined: profileArray.dateJoined,
        numberOfTuits: profileArray.numberOfTuits,
        followingCount: profileArray.followingCount,
        followersCount: profileArray.followersCount
    });

    const changeProfileData = event => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value
        });
    };

    const updateProfileData = () => {
        dispatch(updateProfile(profileData));
    };

    const changeDOB = () => {
        setEditDOBBtn(!editDOBBtn);
    }

    return (
        <div>
            <div className="row">
                <div className="col-2 mt-2 float-start">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col-8 mt-2 ">
                    <div className="fw-bold">
                        Edit Profile
                    </div>
                </div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile">
                        <button
                            className="btn btn-md btn-primary rounded-pill text-white"
                            onClick={updateProfileData}>
                            Save
                        </button>
                    </Link>
                </div>

            </div>
            <div className="wd-profile-details ms-3">
                <form id="profile-fields">
                    <div>
                        <label className="ms-2 text-secondary wd-labels-edit" htmlFor="name">Name</label>
                        <input id="name"
                               defaultValue={profileData.name}
                               className="form-control mt-4 wd-edit-field-boxes"
                               onChange={changeProfileData}  style={{ padding: '20px 5px' }}
                        />
                    </div>
                    <div>
                        <label className="ms-2 text-secondary wd-labels-edit" htmlFor="name">Handle</label>
                        <input id="handle"
                               defaultValue={profileData.handle}
                               className="form-control mt-4 wd-edit-field-boxes"
                               onChange={changeProfileData}  style={{ padding: '20px 5px' }}
                        />
                    </div>
                    <div className="mt-4">
                        {editDOBBtn ?
                            <>
                                <label htmlFor="dateOfBirth">
                                    Birth date
                                </label>
                                <input type="date"
                                       id="dateOfBirth"
                                       className="form-control"
                                       defaultValue={profileData.dateOfBirth}
                                       onChange={changeProfileData}/>
                                <label className="text-primary" onClick={changeDOB}>Done</label>
                            </>
                            :
                            <span>
                                <label htmlFor="dateOfBirth">
                                Birth date
                                </label>
                                    <i className="bi bi-dot"></i>
                                <label className="text-primary" onClick={changeDOB}>Edit</label>
                                </span>
                        }
                        <div>{profileData.dateOfBirth}</div>
                    </div>
                    <div>
                        <label className="ms-2 text-secondary wd-labels-edit" htmlFor="bio">Bio</label>
                        <input id="bio"
                               defaultValue={profileData.bio}
                               className="form-control mt-4"
                               onChange={changeProfileData} style={{ padding: '20px 5px' }}
                        />
                    </div>
                    <div>
                        <label className="ms-2 text-secondary wd-labels-edit" htmlFor="website">Website</label>
                        <input id="website"
                               defaultValue={profileData.website}
                               className="form-control mt-4"
                               onChange={changeProfileData} style={{ padding: '20px 5px' }}
                        />
                    </div>
                    <div>
                        <label className="ms-2 text-secondary wd-labels-edit" htmlFor="location">Location</label>
                        <input id="location"
                               defaultValue={profileData.location}
                               className="form-control mt-4"
                               onChange={changeProfileData} style={{ padding: '20px 5px' }}
                        />
                    </div>


                </form>
            </div>
        </div>
    )
}

export default EditPage;