import TextareaAutosize from 'react-textarea-autosize';
import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames/bind';

import { TextareaType } from 'enums';

import { TextareaProps } from './Textarea.types';
import * as styles from './Textarea.scss';

const cx = cn.bind(styles);

export const Textarea: FunctionComponent<TextareaProps> = props => {
    const {
        onInput,
        type = TextareaType.TEXT,
        placeholder,
        value,
        autoFocus = false,
    } = props;

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => {
            const { value } = event.target;

            onInput(value);
        },
        [onInput],
    );

    const rootClassNames = cx('root');
    const textareaClassNames = cx('textarea', type);

    const rootProps = {
        value,
        autoFocus,
        placeholder,
        onChange: onChangeCallback,
        className: textareaClassNames,
    };

    return (
        <div className={rootClassNames}>
            <TextareaAutosize {...rootProps} />
        </div>
    );
};

export default Textarea;
