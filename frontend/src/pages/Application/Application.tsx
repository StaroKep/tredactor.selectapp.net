import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import cn from 'classnames/bind';
import { history } from 'data/store/history';

import { Home } from 'pages/Home';
import { Editor } from 'pages/Editor/container';
import { Article } from 'pages/Article';
import { Profile } from 'pages/Profile/container';
import { Login } from 'pages/Login/container';
import { Sandbox } from 'pages/Sandbox';

import * as styles from './Application.scss';

const cx = cn.bind(styles);

export const Application: FunctionComponent = () => {
    return (
        <ConnectedRouter history={history}>
            <div className={cx('root')}>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/editor">
                        <Editor />
                    </Route>
                    <Route path="/article/:id">
                        <Article />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/sandbox">
                        <Redirect to="/profile" />
                        <Sandbox />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default Application;
