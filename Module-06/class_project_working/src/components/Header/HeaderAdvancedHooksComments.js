import { Link } from "react-router-dom"
import "./Header.scss";
import { useContextDispatchService } from "../../service/service";
import { updateUserName, toggleTheme } from "../../service/actions";
// import { useContext } from 'react'; // ** see note at bottom of AppContext.js
// import { useContextService, Context } from "../AppContext/AppContext"; // ** see note at bottom of AppContext.js

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
    // const service = useContextService();
    // const service = useContext(Context)// ** see note at bottom of AppContext.js

    // this gives you access to your entire (data dispatch) service in this component, using props (service.username etc.)
    const [service, dispatch] = useContextDispatchService();
        // array shape from createContext() in service.js, passed via SERVICE_CONTEXT through export of useContextDispatchService at bottom... SERVICE_CONTEXT is deconstructed to [service, dispatch]
        // dispatch actions below in onClicks of buttons
        // NEVER UPDATE THE "SERVICE" DIRECTLY FROM A COMPONENT, ALWAYS USE DISPATCH... let the reducer figure out what the next state of the Service should be.

    return (
        <div className="Header">
            <nav
                className={`navbar navbar-expand-md navbar-${service.theme} bg-${service.theme} mb-4`}
            >
                <Link className="navbar-brand" to="/">
                    {service.username !== "LOGGED OUT" ? `RandR for ${service.username}` : service.username}
                </Link>

                {/* alt markup from when using useContext only, no useReducer */}
                {/* <ContextServiceConsumer>
                    {(service) => <span>{service.username}</span>}
                </ContextServiceConsumer> */}

                <button className="btn btn-primary btn-sm m-1"
                    onClick={() => {
                        if (service.username !== "LOGGED OUT") {
                            // provide dispatch action you want to make it back to "service" - the action is an object imported from actions.js in the function below
                            dispatch(updateUserName("LOGGED OUT"))
                        } else {
                            let login = window.prompt("Enter your username:");
                            dispatch(updateUserName(login));
                        }
                        
                    }}
                >
                    {service.username === "LOGGED OUT" ? "Login" : "Logout"}
                </button>

                <button className="btn btn-secondary btn-sm m-1"
                    onClick={() => {
                        dispatch(toggleTheme())
                    }}
                >
                    {service.theme === "light" ? "GO DARK" : "GO LIGHT"}
                </button>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#hamburger"
                    aria-controls="hamburger"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="hamburger">
                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item mr-md-5">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ml-md-5 mr-md-5">
                            <Link className="nav-link" to="/search">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item ml-md-5">
                            <Link className="nav-link" to="/wiki">
                                Wiki
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-md-block">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">
                                <Icon icon={faSearch} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <Icon icon={faShoppingCart} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}