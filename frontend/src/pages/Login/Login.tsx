import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import cn from 'classnames/bind';

import text from 'src/text';
import { Exit } from 'src/icons';

import { Form } from './parts/Form';

import { LoginProps } from './Login.types';
import * as styles from './Login.scss';

const cx = cn.bind(styles);

const Login: FunctionComponent<LoginProps> = (props: any) => {
    const { userEmail, setUserData } = props;

    const loginForm = !userEmail ? (
        <>
            <div className={cx('title')}>{text.Login}:</div>
            <Form setUserData={setUserData} />
        </>
    ) : (
        <Redirect to="/profile" />
    );

    return (
        <div className={cx('root')}>
            <div className={cx('content')}>
                <Link className={cx('exit')} to="/">
                    <Exit />
                </Link>

                {loginForm}
            </div>
        </div>
    );
};

export default Login;
