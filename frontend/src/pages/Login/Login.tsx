import React, { FunctionComponent, useState } from 'react';
import cn from 'classnames/bind';

import text from 'src/text';

import { Form } from './parts/Form';
import { SuccessMessage } from './parts/SuccessMessage';

import * as styles from './Login.scss';
import { LoginProps } from './Login.types';

const cx = cn.bind(styles);

const Login: FunctionComponent<LoginProps> = (props: any) => {
    const { userEmail, setUserData } = props;

    const loginForm = !userEmail ? (
        <>
            <div className={cx('title')}>{text.Login}:</div>
            <Form setUserData={setUserData} />
        </>
    ) : (
        <SuccessMessage />
    );

    return (
        <div className={cx('root')}>
            <div className={cx('content')}>{loginForm}</div>
        </div>
    );
};

export default Login;
