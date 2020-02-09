import React, { FormEvent, FunctionComponent, useState } from 'react';
import cn from 'classnames/bind';

import {
    onPaste,
    singleLineContentEditableOnKeyDown,
} from 'pages/Editor/parts/helpers';

import * as styles from './SubTitle.scss';

const cx = cn.bind(styles);

const SubTitle: FunctionComponent = () => {
    const [text, setText] = useState('');

    const onChange = (e: FormEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        setText(target.innerText);
    };

    return (
        <div
            contentEditable
            className={cx('root')}
            onKeyDown={singleLineContentEditableOnKeyDown}
            onBlur={onChange}
            onPaste={onPaste}
        >
            {text}
        </div>
    );
};

export default SubTitle;
