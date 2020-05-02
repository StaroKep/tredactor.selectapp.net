import React, { FunctionComponent, MouseEvent, useCallback } from 'react';
import cn from 'classnames/bind';

import { Text } from 'components/Text';

import { TextTag } from 'enums/textTag';
import { TextAlign } from 'enums/textAlign';
import { Input } from 'components/Input';
import Button from 'components/Button/Button';
import { InputType } from 'enums/inputTypes';

import * as styles from './SignIn.scss';
import { TextWeight } from 'enums/textWeight';
import { TextType } from 'enums/textType';
import { TextColor } from 'enums/textColor';
import { Exit } from 'src/icons';
import { Link } from 'react-router-dom';
import { Path } from 'enums/paths';
import { ButtonTheme } from 'enums/buttonTheme';

import { SignInProps } from './SignIn.types';

const cx = cn.bind(styles);

export const SignIn: FunctionComponent<SignInProps> = () => {
    const onSubmitButtonClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('click');
    }, []);

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
                    />
                    <Input
                        className={cx('input')}
                        placeholder="Password"
                        type={InputType.PASSWORD}
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
