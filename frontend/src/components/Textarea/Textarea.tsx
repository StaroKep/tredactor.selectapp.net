import React, { FunctionComponent, useState, FormEvent, KeyboardEvent } from 'react';
import cn from 'classnames/bind';

import { TEXTAREA_TYPES, KEYS } from 'enums';

import { TextareaProps } from './Textarea.types';
import * as styles from './Textarea.scss';

const cx = cn.bind(styles);

const Textarea: FunctionComponent<TextareaProps> = props => {
    const {
        isSingleLine = false,
        type = TEXTAREA_TYPES.ARTICLE_TEXT,
        placeholder = 'Input field',
        onInputCallback = () => {},
    } = props;

    const [text, setText] = useState('');

    const textStyles = cx(type);

    const viewClassName = cx('view', textStyles, {
        placeholder: !text,
    });
    const textareaClassName = cx('textarea', textStyles);

    const onInput = (e: FormEvent<HTMLTextAreaElement>) => {
        const { value } = e.currentTarget;

        setText(value);
        onInputCallback(value);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (isSingleLine && e.nativeEvent.key === KEYS.ENTER) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <div className={cx('root')}>
            <div className={viewClassName}>{text || placeholder}</div>
            <textarea onInput={onInput} onKeyDown={onKeyDown} className={textareaClassName} />
        </div>
    );
};

export default Textarea;
