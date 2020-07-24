import React, { FunctionComponent, useCallback, ChangeEvent, useState } from 'react';
import cn from 'classnames/bind';

import { InputType } from 'enums/inputTypes';

import { InputProps } from './Input.types';

import * as styles from './Input.scss';

const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = props => {
    const {
        className,
        placeholder,
        type = InputType.TEXT,
        autoFocus,
        onChange,
        initialValue = '',
    } = props;

    const [value, setValue] = useState(initialValue);

    const onInputValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value: newValue } = event.target;

            setValue(newValue);
            onChange(newValue);
        },
        [onChange, setValue],
    );

    const inputProps = {
        type,
        value,
        autoFocus,
        placeholder,
        onChange: onInputValueChange,
        className: cx('root', className),
    };

    return <input {...inputProps} />;
};

export default Input;
