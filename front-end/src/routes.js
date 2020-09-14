import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/login/index';
import Home from './pages/home/index';
import {isAuthenticated} from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={isAuthenticated() ? Home : Login} />
            <PrivateRoute exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;