import React, { FunctionComponent, useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { Title, TitleProps, ArticleContent, ArticleContentProps } from 'components';

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
        onSetCurrentArticleContent,
    } = props;
    const { title = '', content = [] } = currentArticle || {};

    const rootClassNames = cx('root');
    const articleWrapperClassNames = cx('article-wrapper');
    const articleClassName = cx('article');

    const titleProps: TitleProps = {
        value: title,
        onSetCurrentArticle,
    };

    const articleContentProps: ArticleContentProps = {
        content,
        onSetCurrentArticleContent,
    };

    return (
        <div className={rootClassNames}>
            <RightMenu>
                <CloseButton onClick={onGoBack} />
                {userEmail && <SaveButton onClick={onSaveCurrentArticle} />}
            </RightMenu>
            <div className={articleWrapperClassNames}>
                <div className={articleClassName}>
                    <Title {...titleProps} />
                    <ArticleContent {...articleContentProps} />
                </div>
            </div>
        </div>
    );
};

export default Editor;
