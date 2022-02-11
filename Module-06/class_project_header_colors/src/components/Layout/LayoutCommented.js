import { Header } from '../Header/Header';
import { HomePage } from '../HomePage/HomePage';
import { SearchPage } from '../SearchPage/SearchPage';
import { Footer } from '../Footer/Footer';
import { Wiki } from '../../wiki/Wiki';
import { CartPage } from '../CartPage/CartPage';
import { ProductDetailPage } from '../ProductDetailPage/ProductDetailPage';
// BrowserRouter in place of useState for switching what to display because useState gets very complicated when displaying more than 2 things. Refer to BrowserRounter as Router in the code. Easier to type, also useful if you have 2 routers with the same official names.
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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

                    <Route path="/cart">
                        <CartPage />
                    </Route>

                    {/* last part of the file path is going to change depending on which product is clicked. query parameter for the id of that product. : is syntax for query paramenter. in our code we're going to listen for it and replace it with the actual id of product the user is looking at. */}
                    <Route path="/products/:id">
                        <ProductDetailPage />
                    </Route>
                                                
                    <Route path="/wiki">
                        <Wiki />
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