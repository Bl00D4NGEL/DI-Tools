import RouteConfig from "../../RouteConfig";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import React from "react";
import Navigation from "../Navigation/Navigation";

export default function AppRouter() {
    const generateRoutes = () => {
        return RouteConfig.getAll().map((route) => {
            return <Route key={route.path} path={route.path} exact component={route.component}/>;
        });
    };

    return <Router>
        <Redirect to={RouteConfig.getDefaultPath()}/>
        <div>
            <Navigation/>
            <div className="main">
                {generateRoutes()}
            </div>
        </div>
    </Router>
}
