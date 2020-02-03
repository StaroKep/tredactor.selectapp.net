import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Home } from 'pages/Home';
import { Editor } from 'pages/Editor';
import { Article } from 'pages/Article';
import { Profile } from "pages/Profile";
import { Login } from 'pages/Login/container';

import * as styles from './Application.scss';

const cx = cn.bind(styles);

export const Application: FunctionComponent = () => {
    return (
        <Router>
            <div className={cx('root')}>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/editor">
                        <Link to="/">Home</Link>
                        <br />
                        <Editor />
                    </Route>
                    <Route path="/article">
                        <Link to="/">Home</Link>
                        <br />
                        <Article />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Application;
