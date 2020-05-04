import React, { FunctionComponent, MouseEvent, useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Link, Redirect } from 'react-router-dom';

import { Exit } from 'icons';
import { Input, Button, Text } from 'components';
import {
    InputType,
    TextWeight,
    TextType,
    TextColor,
    Path,
    ButtonTheme,
    TextTag,
    TextAlign,
} from 'enums';

import * as styles from './SignUp.scss';

import { SignUpProps } from './SignUp.types';

const cx = cn.bind(styles);

export const SignUp: FunctionComponent<SignUpProps> = props => {
    const { userEmail, onSignUpButtonClick } = props;

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
            onSignUpButtonClick({
                email,
                password,
            });
        },
        [email, password, onSignUpButtonClick],
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
                        Registration
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
                                Sign up
                            </Text>
                        </Button>
                        <Button
                            className={cx('link')}
                            isLink
                            to={Path.SIGN_IN}
                            theme={ButtonTheme.LIGHT}
                        >
                            <Text weight={TextWeight.BOLD}>Sign in</Text>
                        </Button>
                    </div>
                </form>
                <div className={cx('info')}>
                    <Text type={TextType.SMALL} align={TextAlign.CENTER}>
                        By clicking sign up button, you will agree with license agreements and
                        newsletter mailing.
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
