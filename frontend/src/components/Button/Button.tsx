import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { ButtonProps } from './Button.types';

import * as styles from './Button.scss';
import { Link } from 'react-router-dom';

const cx = cn.bind(styles);

export const Button: FunctionComponent<ButtonProps> = props => {
    const { children, onClick, className, isLink = false, to, theme } = props;

    const classNames = cx('root', className, theme, {
        link: isLink,
    });

    if (isLink && to) {
        return (
            <Link to={to} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classNames}>
            {children}
        </button>
    );
};

export default Button;
