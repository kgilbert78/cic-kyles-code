import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.scss";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {

    const [username, setUsername] = useState("Kyle");
    const [theme, setTheme] = useState("light");


    const handleClickLogin = () => {
        if (username !== "LOGGED OUT") {
            setUsername("LOGGED OUT")
        } else {
            let login = window.prompt("Enter your username:");
            setUsername(login);
        }   
    }

    const handleClickTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className="Header">
            <nav
                className={`navbar navbar-expand-md navbar-${theme} bg-${theme} mb-4`}
            >
                <Link className="navbar-brand" to="/">
                    {username !== "LOGGED OUT" ? `RandR for ${username}` : username}
                </Link>

                <button 
                    className="btn btn-primary btn-sm m-1"
                    onClick={handleClickLogin}
                >
                    {username === "LOGGED OUT" ? "Login" : "Logout"}
                </button>

                <button
                    className="btn btn-secondary btn-sm m-1"
                    onClick={handleClickTheme}
                >
                    {theme === "light" ? "GO DARK" : "GO LIGHT"}
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