import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { phrases } from './ArticlesList.config';
import { ArticlesListProps } from './ArticlesList.types';

import * as styles from './ArticlesList.scss';
import { Path } from 'enums/paths';

const cx = cn.bind(styles);

export const ArticlesList: FunctionComponent<ArticlesListProps> = props => {
    const { articles } = props;

    return (
        <div className={cx('root')}>
            <div className={cx('title')}>{phrases.projects}</div>
            <div>
                {articles &&
                    articles.map(article => {
                        const { id, title } = article;

                        if (!title) return null;

                        return (
                            <div key={id}>
                                <Link to={Path.ARTICLE.concat(`/${id}`)}>{title}</Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ArticlesList;
