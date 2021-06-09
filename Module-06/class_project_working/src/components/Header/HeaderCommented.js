// import Link for use in place of <a href=""> which causes whole page to reload, this does not. Only section that is changing.import { Link } from "react-router-dom"
import { Link } from "react-router-dom"

// import scss file to link it instead of <link rel="stylesheet" href="" />
import "./Header.scss";

/* npm install fontawesome first according to their documentation & what you want to use. Here: npm install --save @fontawesome-svg-core @fontawesome/free-solid-svg-icons  Code below imports fontawesome so it can be referenced as Icon in code for simplicity, then imports the specific icons we're going to use. */
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Order important! Header is a child of Router, and since Link is a child of Header this will work.
export const Header = (props) => {
  return (
    <div className="Header">
        {/* Nav bar adapted from Bootstrap example code https://getbootstrap.com/docs/5.0/examples/navbar-static/ (view page source & copy from <nav> to </nav>, Remove from <form> to </form>, change instances of <a> to <Link>, change instances of class to className, changed classes from -dark to -light) */}
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
            {/* Link takes prop "to" the way <a> takes href */}
            <Link className="navbar-brand" to="/">
                RandR
            </Link>         
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto ml-auto">
                    {/* boostrap classes for margin on ul & li to spread nav links */}
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
                {/* Bootstrap classes for don't display search & cart on small screen, display block on medium screen */}
                <div className="d-none d-md-block">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">
                                <Icon icon={faSearch}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <Icon icon={faShoppingCart}/>
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
  )
}