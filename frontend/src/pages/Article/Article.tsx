import { useParams } from 'react-router';
import React, { FunctionComponent, useEffect } from 'react';
import cn from 'classnames/bind';

import { Exit } from 'icons';
import { ArticleTitle, Button } from 'components';
import { ArticleProps } from './Article.types';

import * as styles from './Article.scss';
import { ButtonTheme } from 'enums/buttonTheme';
import { ArticleContentElement } from 'common/types/entities/article';
import { ArticleContentType } from 'enums/articleContent';
import { Text } from 'components/Article/Text';
import { Image } from 'components/Article/Image';

const cx = cn.bind(styles);

export const Article: FunctionComponent<ArticleProps> = props => {
    const { currentArticle, onGetArticleById, onGoBack } = props;
    const { id } = useParams();
    const { title, body = [] } = currentArticle || {};

    useEffect(() => {
        onGetArticleById(id);
    }, []);

    const rootClassNames = cx('root');
    const articleWrapperClassNames = cx('article-wrapper');
    const articleClassNames = cx('article');
    const closeButtonClassNames = cx('close-button');

    const closeButtonProps = {
        onClick: onGoBack,
        theme: ButtonTheme.LAZY,
        className: closeButtonClassNames,
    };

    console.log(body);
    return (
        <div className={rootClassNames}>
            <Button {...closeButtonProps}>
                <Exit />
            </Button>
            <div className={articleWrapperClassNames}>
                <div className={articleClassNames}>
                    <ArticleTitle>{title}</ArticleTitle>

                    {body.map((element: ArticleContentElement) => {
                        const { data, type } = element;

                        switch (type) {
                            case ArticleContentType.TEXT:
                                return <Text>{data}</Text>;
                            case ArticleContentType.IMAGE:
                                return <Image src={data} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Article;
