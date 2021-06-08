// import Link for use in place of <a href=""> which causes whole page to reload, this does not. Only section that is changing.
import { Link } from 'react-router-dom';

// Order important! Header is a child of Router, and since Link is a child of Header this will work.
export const Header = (props) => {
    return (
        <div className="Header">
            {/* Link takes prop "to" the way <a> takes href */}
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}