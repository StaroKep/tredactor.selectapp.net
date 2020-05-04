import React, { FunctionComponent, useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { TextareaType } from 'enums';
import { Textarea, TextareaProps } from 'components';

import { EditorProps } from './Editor.types';
import { CloseButton, RightMenu, SaveButton } from './parts';

import * as styles from './Editor.scss';

const cx = cn.bind(styles);

export const Editor: FunctionComponent<EditorProps> = props => {
    const {
        userEmail,
        onSetCurrentArticle,
        currentArticle,
        onSaveCurrentArticle,
        onGoBack,
    } = props;
    const { title: currentArticleTitle = '', text: currentArticleText = '' } = currentArticle || {};

    const rootClassNames = cx('root');
    const articleWrapperClassNames = cx('article-wrapper');
    const articleClassName = cx('article');

    const [title, setTitle] = useState(currentArticleTitle);
    const [text, setText] = useState(currentArticleText);

    useEffect(() => {
        onSetCurrentArticle({
            text,
            title,
        });
    }, [onSetCurrentArticle, title, text]);

    const titleTextareaProps: TextareaProps = {
        value: title,
        placeholder: 'Title',
        onInput: setTitle,
        type: TextareaType.TITLE,
    };

    const textTextareaProps: TextareaProps = {
        value: text, // TODO: Это место надо оптимизировать!
        placeholder: 'Text',
        onInput: setText,
        type: TextareaType.TEXT,
    };

    return (
        <div className={rootClassNames}>
            <RightMenu>
                <CloseButton onClick={onGoBack} />
                {userEmail && <SaveButton onClick={onSaveCurrentArticle} />}
            </RightMenu>
            <div className={articleWrapperClassNames}>
                <div className={articleClassName}>
                    <Textarea {...titleTextareaProps} />
                    <Textarea {...textTextareaProps} />
                </div>
            </div>
        </div>
    );
};

export default Editor;
