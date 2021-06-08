import { Header } from '../Header/Header';
import { HomePage } from '../HomePage/HomePage';
import { SearchPage } from '../SearchPage/SearchPage';
import { Footer } from '../Footer/Footer';
// refer to BrowserRounter as Router in the code. Easier to type, also useful if you have 2 routers with the same official names.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Layout = (props) => {
    return (
        <Router>
            {/* ^Router must surround everything it interacts with because it's scope is limited to children */}
            <div className="Layout">
                <Header />
                {/* Switch accepts children: the different routes you can take with the app */}
                <Switch>
                    {/* The first route that matches what's in the URL is the one that's going to be shown. Before including path it will look at the URL, which is at the root (without /) and will look for a /. Without seeing /, it will render the first thing it sees that doesn't cause an error, which is SearchPage here. Routes can be self closing also. */}
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    {/* without "exact" it will take the first slash it finds after the root URL and stop looking at the rest of the address, so it will display search page */}
                    <Route exact path="/" >
                        <HomePage />
                    </Route>

                </Switch>
                <Footer />
            </div>
        </Router>

    )
}