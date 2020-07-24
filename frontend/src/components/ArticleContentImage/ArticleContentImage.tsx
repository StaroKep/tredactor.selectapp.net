import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';
import compact from 'lodash/compact';

import { Textarea } from 'components/Textarea';

import { phrases } from './ArticleContent.config';
import { ArticleContentImageProps } from './ArticleContentImage.types';

import * as styles from './ArticleContentImage.scss';
import { Button } from 'src/components';
import { ButtonTheme } from 'enums/buttonTheme';

const cx = cn.bind(styles);

export const ArticleContentImage: FunctionComponent<ArticleContentImageProps> = props => {
    const {
        onSetCurrentArticleContent,
        articleContentElementId,
        currentArticleContent,
        isApproved,
        data,
    } = props;

    const onDeleteButtonClick = useCallback(() => {
        const newContent = [...currentArticleContent];
        delete newContent[articleContentElementId];
        onSetCurrentArticleContent(compact(newContent));
    }, [currentArticleContent, articleContentElementId]);

    const onEditButtonClick = useCallback(() => {
        const contentElement = currentArticleContent[articleContentElementId];
        const updatedContentElement = {
            ...contentElement,
            isApproved: false,
        };

        const newContent = [...currentArticleContent];
        newContent[articleContentElementId] = updatedContentElement;

        onSetCurrentArticleContent(newContent);
    }, [articleContentElementId, onSetCurrentArticleContent, currentArticleContent]);

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

    const onSubmitButtonClick = useCallback(() => {
        const contentElement = currentArticleContent[articleContentElementId];
        const updatedContentElement = {
            ...contentElement,
            isApproved: true,
        };

        const newContent = [...currentArticleContent];
        newContent[articleContentElementId] = updatedContentElement;

        onSetCurrentArticleContent(newContent);
    }, [articleContentElementId, onSetCurrentArticleContent, currentArticleContent]);

    if (isApproved) {
        return (
            <div className={cx('root')}>
                <img className={cx('image')} src={data} alt="Image" />
                <Button
                    theme={ButtonTheme.LIGHT}
                    className={cx('edit-button')}
                    onClick={onEditButtonClick}
                >
                    Change
                </Button>
            </div>
        );
    }

    return (
        <div className={cx('root')}>
            <Textarea
                placeholder={phrases.someImageURL}
                onDeleteButtonClick={onDeleteButtonClick}
                onInput={onTextareaInput}
                withDeleteButton
            />
            <Button className={cx('submit-button')} onClick={onSubmitButtonClick}>
                Submit
            </Button>
        </div>
    );
};

export default ArticleContentImage;
