import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';

import { ArticleContentText, ArticleContentImage } from 'data/entities/article/types';
import { ArticleContentType } from 'enums';
import { Text, TextProps } from 'components/Editor/Text';
import { Image, ImageProps } from 'components/Editor/Image';
import { AddElementButton } from 'src/components/Editor/AddElementButton/container';

import { ArticleContentProps } from './ArticleContent.types';

import * as styles from './ArticleContent.scss';

const cx = cn.bind(styles);

export const ArticleContent: FunctionComponent<ArticleContentProps> = props => {
    const { body, onSetCurrentArticleContent } = props;

    const rootClassName = cx('root');

    return (
        <div className={rootClassName}>
            {body.map((element, index) => {
                const { type } = element;

                switch (type) {
                    case ArticleContentType.TEXT:
                        const textProps: TextProps = {
                            index,
                            articleContent: body,
                            onSetCurrentArticleContent,
                            elementData: element as ArticleContentText,
                        };

                        return <Text {...textProps} />;
                    case ArticleContentType.IMAGE:
                        const imageProps: ImageProps = {
                            index,
                            articleContent: body,
                            onSetCurrentArticleContent,
                            elementData: element as ArticleContentImage,
                        };

                        return <Image {...imageProps} />;
                }
            })}
            <AddElementButton atTheEnd />
        </div>
    );
};

export default ArticleContent;
