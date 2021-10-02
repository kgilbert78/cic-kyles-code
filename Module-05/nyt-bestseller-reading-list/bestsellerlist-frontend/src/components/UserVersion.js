import { UserBestsellerList } from "./UserBestSellerList";
import { UserSideBar } from "./UserSideBar";

export const UserVersion = (props) => {
    return (
        <div className="navbar p-2">
            <h2>User Version Content</h2>
            <div className="col-9">
                <UserBestsellerList />
            </div>
            <div className="col-3">
                <UserSideBar />
            </div>
        </div>
    );
};