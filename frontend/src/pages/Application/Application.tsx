import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Editor } from 'pages/Editor';
import { Article } from 'pages/Article';
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
                    <Route path="/">
                        <Link to="/">Home</Link>
                        <br />
                        <Link to="/editor">Editor</Link>
                        <br />
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/article">Article</Link>
                        <div>404</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Application;
