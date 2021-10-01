import './App.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Header } from "./components/Header"
import { DemoVersion } from "./components/DemoVersion"
import { UserVersion } from "./components/UserVersion"

function App(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeLogInStatus = (props) => {
        // create popup window to enter user number to pass to db

        // set status to logged in / logged out
        setIsLoggedIn(!isLoggedIn);

        // return both user # & isLoggedIn in an object
        return isLoggedIn;
    };

    return (
        <div className="App">
            <Router>
                <Header changeUserLogInStatus={changeLogInStatus} userLoggedIn={isLoggedIn} /> 
                <Switch>
                    <Route path="/myreadinglist">
                        <UserVersion />
                    </Route>
                    <Route path="/">
                        <DemoVersion />
                    </Route>
                </Switch>
            </Router>
     
        </div>
    );
}

export default App;
