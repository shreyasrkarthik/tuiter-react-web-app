const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon}
                        class="rounded-circle" height="30" style="height: 40px; width: 40px;"
                    />
                </div>
                <div class="col-7">
                    <div style="float: left; padding-right: 5px;font-weight: bold; font-size: 14px;">
                        ${who.userName}
                    </div>
                    <i class="fa fa-check-circle pt-1" 
                    style="float: left;padding-right: 5px;"></i>
                    <div style="clear;">&nbsp;</div>
                    <div class="wd-title" style="font-size: 14px;">${who.handle}</div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;