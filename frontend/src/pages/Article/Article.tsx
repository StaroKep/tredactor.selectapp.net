import React, { FunctionComponent, useState, MouseEvent } from 'react';
import cn from 'classnames/bind';
import queryString from 'query-string';

import axios from 'axios';

import * as styles from './Article.scss';

const cx = cn.bind(styles);

export const Article: FunctionComponent = () => {
    const [article, setArticle] = useState({});
    const query = queryString.parse(location.search);
    const { id } = query;

    const makeRequest = () => {
        axios({
            method: 'get',
            url: `http://localhost:3000/article?id=${id}`,
        }).then(({ data }) => {
            setArticle(data[0] || { title: 'No such article' });
        });
    };

    if (!Object.keys(article).length) {
        makeRequest();
    }

    const handleButtonClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        makeRequest();
    };

    const { title, body } = article;

    return (
        <div className={cx('root')}>
            <div>
                Article: {id}
                <button onClick={handleButtonClick}>Show</button>
            </div>

            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Article;
