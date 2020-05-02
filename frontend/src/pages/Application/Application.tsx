import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import cn from 'classnames/bind';
import { history } from 'data/store/history';

import { Home } from 'pages/Home';
import { Editor } from 'pages/Editor/container';
import { Article } from 'pages/Article';
import { Profile } from 'pages/Profile/container';
import { Sandbox } from 'pages/Sandbox';
import { SignUp } from 'pages/SignUp/container';
import { SignIn } from 'pages/SignIn';

import * as styles from './Application.scss';
import { Path } from 'enums/paths';

const cx = cn.bind(styles);

export const Application: FunctionComponent = () => {
    return (
        <ConnectedRouter history={history}>
            <div className={cx('root')}>
                <Switch>
                    <Route path={Path.SIGN_UP}>
                        <SignUp />
                    </Route>
                    <Route path={Path.SIGN_IN}>
                        <SignIn />
                    </Route>
                    <Route path={Path.EDITOR}>
                        <Editor />
                    </Route>
                    <Route path={Path.ARTICLE}>
                        <Article />
                    </Route>
                    <Route path={Path.PROFILE}>
                        <Profile />
                    </Route>
                    <Route path={Path.PROFILE}>
                        <Redirect to="/profile" />
                        <Sandbox />
                    </Route>
                    <Route path={Path.SANDBOX}>
                        <Redirect to="/profile" />
                        <Sandbox />
                    </Route>
                    <Route path={Path.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default Application;
