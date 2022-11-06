import React from "react";

const TuitStats = ({ stats }) => {
    return (
        <div className="row">
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat-left-dots"></i> {stats.commentsCount}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat"></i> {stats.retuitsCount}
                </li>
                <li className="nav-item">
                    <span style={{ marginRight: '5px' }}> {stats.liked ? <i style={{ color: 'red' }} className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}</span>{stats.likesCount}
                </li>
                <li className="nav-item">
                    <i className="bi bi-share"></i>
                </li>
            </ul>
        </div>
    )
}
export default TuitStats;