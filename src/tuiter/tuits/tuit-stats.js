import React, {useState} from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({ stats }) => {
    const dispatch = useDispatch();

    const [isLiked, setIsLiked] = useState(stats.liked);
    const [likes, setLikes] = useState(stats.likes);

    const [isDisliked, setIsDisliked] = useState(stats.disliked);
    const [dislikes, setDislikes] = useState(stats.dislikes);

    const disLikeHandler = () => {
        const updatedDislikes = isDisliked? dislikes - 1: dislikes + 1;
        setDislikes(updatedDislikes);
        setIsDisliked(!isDisliked);

        dispatch(updateTuitThunk({
            ...stats,
            dislikes: updatedDislikes,
            isDisliked: !isDisliked
        }));
    }

    const likeHandler = () => {
        const updatedLikes = isLiked? likes - 1: likes + 1;
        setLikes(updatedLikes);
        setIsLiked(!isLiked);

        dispatch(updateTuitThunk({
            ...stats,
            likes: updatedLikes,
            isLiked: !isLiked
        }));


    }

    return (
        <div className="row">
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat-left-dots"></i> {stats.comments}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat"></i> {stats.retuits}
                </li>
                <li className="nav-item">
                    <span style={{ marginRight: '5px' }}>  <i className={isLiked ? "bi bi-heart-fill text-danger" : "bi bi-heart"} onClick={likeHandler}></i></span>{stats.likes}
                </li>
                <li className="nav-item">
                    <span style={{ marginRight: '5px' }}>  <i className={isDisliked ? "bi bi-hand-thumbs-down-fill text-danger" : "bi bi-hand-thumbs-down-fill "} onClick={disLikeHandler}></i></span>{stats.dislikes}
                </li>
                <li className="nav-item">
                    <i className="bi bi-share"></i>
                </li>
            </ul>
        </div>
    )
}
export default TuitStats;