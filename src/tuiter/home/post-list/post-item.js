const PostItem = ({ post }) => {
    return (
        <li className="list-group-item p-3 bg-transparent">
            <img src={post.profileImage} style={{ height: '45px' }} className="img-fluid img-size rounded-circle" alt="avatar" />
            <div className="col col-xl-9 ps-2 mb-2 float-start" >
                <strong>{post.userName}</strong>
                <span><i className="fa-solid fa-circle-check"></i></span>
                <span className="text-secondary">
                    @{post.handle} - {post.time}
                </span>
                <br />
                {post.description}
            </div>
            <i className="fa-solid fa-ellipsis text-secondary mx-4" ></i>
            <div className="card col border-secondary wd-mx-5 wd-clear bg-transparent ">
                <img src={post.descriptionImage} className={
                    post.topic !== "" && post.description !== "" && post.link !== ""
                        ? "card-img-top"
                        : "card-img-top rounded-bottom"

                }
                     alt="post" />
                {post.topic !== "" && post.description !== "" && post.link !== "" ?
                    <div className="card-body">
                        <p className="card-title fs-6 fw-bolder" >{post.topic}</p>
                        <p className="card-text text-secondary">{post.description}</p>
                        <a href={post.link} className="text-secondary" style={{ textDecoration: "none" }}>
                            {post.linkText}
                        </a>
                    </div> : <></>}
            </div>
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat-left-dots"></i> {post.commentsCount}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat"></i> {post.retuitsCount}
                </li>
                <li className="nav-item">
                    <i className="bi bi-heart-fill"></i> {post.likesCount}
                </li>
                <li className="nav-item">
                    <i className="bi bi-upload"></i>
                </li>
            </ul>
        </li >
    );
};


export default PostItem;