import React, { FunctionComponent, MouseEvent, useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Link, Redirect } from 'react-router-dom';

import { Exit } from 'icons';
import { Text, Input, Button } from 'components';
import { TextWeight, TextColor, Path, ButtonTheme, InputType, TextAlign, TextTag } from 'enums';

import * as styles from './SignIn.scss';

import { SignInProps } from './SignIn.types';

const cx = cn.bind(styles);

export const SignIn: FunctionComponent<SignInProps> = props => {
    const { userEmail, onSignInButtonClick } = props;

    if (userEmail) {
        return <Redirect to={Path.PROFILE} />;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInputChange = useCallback((value: string) => setEmail(value), [setEmail]);
    const onPasswordInputChange = useCallback((value: string) => setPassword(value), [setPassword]);

    const onSubmitButtonClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            event.stopPropagation();
            onSignInButtonClick({
                email,
                password,
            });
        },
        [email, password, onSignInButtonClick],
    );

    return (
        <div className={cx('root')}>
            <div className={cx('wallpaper')} />
            <div className={cx('form-wrapper')}>
                <div className={cx('menu')}>
                    <Text
                        className={cx('title')}
                        tag={TextTag.H3}
                        align={TextAlign.CENTER}
                        isUppercase
                        weight={TextWeight.BOLD}
                    >
                        Authorization
                    </Text>
                    <Link to={Path.HOME}>
                        <Exit className={cx('exit-icon')} />
                    </Link>
                </div>
                <form>
                    <Input
                        className={cx('input')}
                        placeholder="Email"
                        type={InputType.EMAIL}
                        autoFocus
                        onChange={onEmailInputChange}
                    />
                    <Input
                        className={cx('input')}
                        placeholder="Password"
                        type={InputType.PASSWORD}
                        onChange={onPasswordInputChange}
                    />
                    <div className={cx('buttons')}>
                        <Button className={cx('button')} onClick={onSubmitButtonClick}>
                            <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                                Sign in
                            </Text>
                        </Button>
                        <Button
                            className={cx('link')}
                            isLink
                            to={Path.SIGN_UP}
                            theme={ButtonTheme.LIGHT}
                        >
                            <Text weight={TextWeight.BOLD}>Sign up</Text>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
