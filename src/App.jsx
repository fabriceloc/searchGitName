import "./styles.css";
import React from "react";
import Users from "./Users";
import User from "./User";
import Repo from "./Repo";

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

                    <Switch>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        <Route exact path="/users/:id" component={User} />
                        <Route exact path="/repo/:id" component={Repo} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
