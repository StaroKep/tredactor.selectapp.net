import TextareaAutosize from 'react-textarea-autosize';
import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';

import { TextareaType } from 'enums';

import { Hr } from '../Hr';

import { TextareaProps } from './Textarea.types';
import * as styles from './Textarea.scss';

const cx = cn.bind(styles);

export const Textarea: FunctionComponent<TextareaProps> = props => {
    const { onInput, type = TextareaType.TEXT, placeholder, value } = props;

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
        placeholder,
        onChange: onChangeCallback,
        className: textareaClassNames,
    };

    const hr = type === TextareaType.TITLE ? <Hr /> : null;

    return (
        <div className={rootClassNames}>
            <TextareaAutosize {...rootProps} />
            {hr}
        </div>
    );
};

export default Textarea;
