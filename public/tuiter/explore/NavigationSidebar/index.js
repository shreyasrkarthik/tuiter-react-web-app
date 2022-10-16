const NavigationSidebar = () => {
    return(`
       <div class="list-group d-none d-lg-block">
            <a class="list-group-item" href="#">
            <i class="fab fa-twitter"></i>
            </a>
                 
            <a href="#" class="list-group-item">
            <i class="fa fa-home"></i>
            Home
            </a>
            <a href="#" class="list-group-item active">
            <i class="fa fa-hashtag"></i>
            Explore
            </a>
            <a href="#" class="list-group-item">
            <i class="fa fa-bell"></i>
            Notifications
            </a>
            <a href="#" class="list-group-item">
            <i class="fa fa-envelope"></i>
            Messages
            </a>
            <a href="#" class="list-group-item">
            <i class="fa fa-bookmark"></i>
            Bookmarks
            </a>
            <a href="#" class="list-group-item">
            <i class="fas fa-list"></i>
            Lists
            </a>
            <a href="#" class="list-group-item">
            <i class="fas fa-user"></i>
            Profile
            </a>
            <a href="#" class="list-group-item">
            <i class="fas fa-ellipsis-h"></i>
            More
            </a>
       </div>
       <div class="list-group d-lg-none">
            <a href="#" class="list-group-item" aria-current="true">
                <i class="fab fa-twitter fa-2x"></i>
                Home
            </a>
            <a href="#" class="list-group-item active">
                <i class="fa fa-home"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fa fa-hashtag"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fa fa-bell"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fa fa-envelope"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fa fa-bookmark"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-list"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-user"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-minus-circle"></i>
            </a>
        </div>
       <div class="d-grid mt-2">
         <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
       </div>
    `);
}
export default NavigationSidebar;