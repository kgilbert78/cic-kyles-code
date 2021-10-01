import { Link } from "react-router-dom";
export const Header = (props) => {

    return (
        <div className="navbar p-2">
            <h1>This Week's New York Times Bestseller List</h1>
            <div>
                {/* https://www.youtube.com/watch?v=dGrwjYJEG0M&t=3229s */}
                {props.userLoggedIn ? (
                    <Link to="/">
                        <button 
                            className="btn btn-lg btn-block btn-outline-danger" 
                            onClick={props.changeUserLogInStatus}
                        >
                            Logout
                        </button>
                    </Link>
                ) : (
                    <Link to="/myreadinglist">
                        <button 
                            className="btn btn-lg btn-block btn-success" 
                            onClick={props.changeUserLogInStatus}
                        >
                            Login here!
                        </button>
                    </Link>
                )}
                   
            </div>
            
        </div>
    );
};