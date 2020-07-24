import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import cn from 'classnames/bind';
import { history } from 'data/store/history';

import {
    Home,
    Sandbox,
    ArticleContainer,
    EditorContainer,
    SignUpContainer,
    SignInContainer,
    ProfileContainer,
    ArticlesContainer,
} from 'pages';

import * as styles from './Application.scss';
import { Path } from 'enums/paths';

const cx = cn.bind(styles);

export const Application: FunctionComponent = () => {
    return (
        <ConnectedRouter history={history}>
            <div className={cx('root')}>
                <Switch>
                    <Route path={Path.SIGN_UP}>
                        <SignUpContainer />
                    </Route>
                    <Route path={Path.SIGN_IN}>
                        <SignInContainer />
                    </Route>
                    <Route path={Path.EDITOR.concat('/:id?')}>
                        <EditorContainer />
                    </Route>
                    <Route path={Path.ARTICLE.concat('/:id')}>
                        <ArticleContainer />
                    </Route>
                    <Route path={Path.ARTICLES.concat('/:uid')}>
                        <ArticlesContainer />
                    </Route>
                    <Route path={Path.PROFILE}>
                        <ProfileContainer />
                    </Route>
                    <Route path={Path.SANDBOX}>
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
