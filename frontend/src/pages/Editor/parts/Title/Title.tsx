import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';
import { debounce } from 'lodash';

import { TEXTAREA_TYPES } from 'enums';
import { Textarea, TextareaProps } from 'components/Textarea';

import { TitleProps } from './Title.types';
import * as styles from './Title.scss';

const cx = cn.bind(styles);

const Title: FunctionComponent<TitleProps> = props => {
    const { setCurrentArticle } = props;

    const onInput = debounce((value: string) => {
        setCurrentArticle({
            title: value,
        });
    }, 500);

    const textareaProps: TextareaProps = {
        isSingleLine: true,
        type: TEXTAREA_TYPES.ARTICLE_TITLE,
        placeholder: 'Title',
        onInputCallback: onInput,
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default Title;
