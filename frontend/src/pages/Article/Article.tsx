import { useParams } from 'react-router';
import React, { FunctionComponent, useEffect } from 'react';
import cn from 'classnames/bind';

import { Exit } from 'icons';
import { Button } from 'components';

import { RegularText, Title } from './parts';
import { ArticleProps } from './Article.types';

import * as styles from './Article.scss';
import { ButtonTheme } from 'enums/buttonTheme';

const cx = cn.bind(styles);

export const Article: FunctionComponent<ArticleProps> = props => {
    const { currentArticle, onGetArticleById, onGoBack } = props;
    const { id } = useParams();
    const { title, text } = currentArticle || {};

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

    return (
        <div className={rootClassNames}>
            <Button {...closeButtonProps}>
                <Exit />
            </Button>
            <div className={articleWrapperClassNames}>
                <div className={articleClassNames}>
                    <Title>{title}</Title>
                    <RegularText>{text}</RegularText>
                </div>
            </div>
        </div>
    );
};

export default Article;
