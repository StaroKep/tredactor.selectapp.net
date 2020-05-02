import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';
import cn from 'classnames/bind';

import { InputType } from 'enums/inputTypes';

import { InputProps } from './Input.types';

import * as styles from './Input.scss';

const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = props => {
    const { className, placeholder, type = InputType.TEXT, autoFocus, onChange } = props;

    const onInputValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value),
        [onChange],
    );

    const inputProps = {
        type,
        autoFocus,
        placeholder,
        onChange: onInputValueChange,
        className: cx('root', className),
    };

    return <input {...inputProps} />;
};

export default Input;
