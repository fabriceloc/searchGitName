import "./styles.css";
import React from "react";
import Users from "./Users";
import User from "./User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Title from "./Title";

export default function App() {

    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        <Route exact path="/users/:id" component={User} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
