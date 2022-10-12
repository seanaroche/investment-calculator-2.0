import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
            </Switch>
        </Router>
    )
}