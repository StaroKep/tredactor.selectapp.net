import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Editor } from 'pages/Editor';

import * as styles from './Application.scss';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Article } from 'pages/Article';

const cx = cn.bind(styles);

export const Application: FunctionComponent = () => {
    return (
        <Router>
            <div className={cx('root')}>
                <Switch>
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
                        <Link to="/article">Article</Link>
                        <div>404</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Application;
