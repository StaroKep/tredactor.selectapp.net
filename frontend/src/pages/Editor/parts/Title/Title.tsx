import React, { FormEvent, FunctionComponent, useState } from 'react';
import cn from 'classnames/bind';

import {
    onPaste,
    singleLineContentEditableOnKeyDown,
} from 'pages/Editor/parts/helpers';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

const Title: FunctionComponent = () => {
    const [text, setText] = useState('');

    const onChange = (e: FormEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        setText(target.innerText);
    };

    return (
        <div
            contentEditable
            className={cx('root')}
            onBlur={onChange}
            onKeyDown={singleLineContentEditableOnKeyDown}
            onPaste={onPaste}
        >
            {text}
        </div>
    );
};

export default Title;
