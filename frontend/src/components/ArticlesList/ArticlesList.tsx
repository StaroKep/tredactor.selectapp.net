import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { Button } from 'components/Button';

import { phrases } from './ArticlesList.config';
import { ArticlesListProps } from './ArticlesList.types';

import * as styles from './ArticlesList.scss';
import { Path } from 'enums/paths';
import { TextWeight } from 'enums/textWeight';
import { TextColor } from 'enums/textColor';
import { Text } from 'src/components';

const cx = cn.bind(styles);

export const ArticlesList: FunctionComponent<ArticlesListProps> = props => {
    const { articles, onDeleteArticle } = props;

    const onRemoveButtonClickCallbackFactory = (id: number) => () => onDeleteArticle(id);

    return (
        <div className={cx('root')}>
            <div className={cx('title')}>{phrases.projects}</div>
            <div>
                {articles &&
                    articles.map(article => {
                        const { id, title } = article;

                        return (
                            <div key={id}>
                                <Link to={Path.ARTICLE.concat(`/${id}`)}>
                                    {title || phrases.withoutArticle}
                                </Link>
                                <Button onClick={onRemoveButtonClickCallbackFactory(Number(id))}>
                                    <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                                        {phrases.remove}
                                    </Text>
                                </Button>
                                <Button isLink to={`${Path.EDITOR}/${id}`}>
                                    <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                                        {phrases.edit}
                                    </Text>
                                </Button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ArticlesList;
