import React, { FunctionComponent, useCallback, useEffect } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/Button';
import { ArticlesList } from 'components/ArticlesList';

import { ArticlesProps } from './Articles.types';

import * as styles from './Articles.scss';

const cx = cn.bind(styles);

export const Articles: FunctionComponent<ArticlesProps> = props => {
    const { userEmail, onFetchUserArticles, userArticles, onGoBack, onDeleteArticle } = props;

    const onCloseButtonLink = useCallback(() => {
        onGoBack();
    }, []);

    useEffect(() => {
        onFetchUserArticles();
    }, []);

    return (
        <div className={cx('root')}>
            <Button onClick={onCloseButtonLink}>Close</Button>
            <div className={cx('header')}>Articles list of user {userEmail}</div>
            <ArticlesList articles={userArticles} onDeleteArticle={onDeleteArticle} />
        </div>
    );
};

export default Articles;
