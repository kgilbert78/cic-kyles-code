import { Header } from '../Header/Header';
import { HomePage } from '../HomePage/HomePage';
import { SearchPage } from '../SearchPage/SearchPage';
import { Footer } from '../Footer/Footer';
import { Wiki } from '../../wiki/Wiki';
import { CartPage } from '../CartPage/CartPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export const Layout = (props) => {
    return (
        <Router>
            <div className="Layout">
                <Header />

                <Switch>
                    <Route path="/search">
                        <SearchPage />
                    </Route>

                    <Route path="/cart">
                        <CartPage />
                    </Route>

                    <Route path="/products/:id">
                    </Route>
                        
                    <Route path="/wiki">
                        <Wiki />
                    </Route>

                    <Route exact path="/" >
                        <HomePage />
                    </Route>

                </Switch>
                <Footer />
            </div>
        </Router>

    )
}