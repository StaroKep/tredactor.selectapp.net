import React, { FunctionComponent, MouseEvent, useState, FormEvent } from 'react';
import cn from 'classnames/bind';

import axios from 'axios';

import * as styles from './Editor.scss';

const cx = cn.bind(styles);

export const Editor: FunctionComponent = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const buttonClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const data = {
            title,
            body: [
                {
                    text: body,
                },
            ],
        };

        axios({
            method: 'post',
            url: 'http://localhost:3000/article',
            data,
        });
    };

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setTitle(target.value);
    };

    const handleTextAreaInput = (e: FormEvent<HTMLTextAreaElement>) => {
        const target = e.currentTarget;
        setBody(target.value);
    };

    return (
        <div className={cx('root')}>
            <form className={cx('form')}>
                <input onInput={handleInput} className={cx('input', 'form-element')} type="text" />
                <textarea
                    onInput={handleTextAreaInput}
                    className={cx('textarea', 'form-element')}
                    defaultValue="Print text..."
                />

                <button className={cx('button', 'form-element')} onClick={buttonClick}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Editor;
