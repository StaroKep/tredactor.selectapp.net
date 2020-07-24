import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';
import compact from 'lodash/compact';

import { Textarea } from 'components/Textarea';

import { phrases } from './ArticleContent.config';
import { ArticleContentTextProps } from './ArticleContentText.types';

import * as styles from './ArticleContentText.scss';

const cx = cn.bind(styles);

export const ArticleContentText: FunctionComponent<ArticleContentTextProps> = props => {
    const { onSetCurrentArticleContent, articleContentElementId, currentArticleContent } = props;

    const onTextareaInput = useCallback(
        (data: string) => {
            const contentElement = currentArticleContent[articleContentElementId];
            const updatedContentElement = {
                ...contentElement,
                data,
            };

            const newContent = [...currentArticleContent];
            newContent[articleContentElementId] = updatedContentElement;

            onSetCurrentArticleContent(newContent);
        },
        [articleContentElementId, onSetCurrentArticleContent, currentArticleContent],
    );

    const onDeleteButtonClick = useCallback(() => {
        const newContent = [...currentArticleContent];
        delete newContent[articleContentElementId];
        onSetCurrentArticleContent(compact(newContent));
    }, [currentArticleContent, articleContentElementId]);

    return (
        <Textarea
            placeholder={phrases.someText}
            onDeleteButtonClick={onDeleteButtonClick}
            onInput={onTextareaInput}
            withDeleteButton
        />
    );
};

export default ArticleContentText;
