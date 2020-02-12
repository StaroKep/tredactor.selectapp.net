import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { TEXTAREA_TYPES } from 'enums';
import { Textarea, TextareaProps } from 'components/Textarea';

import * as styles from './SubTitle.scss';
import { debounce } from 'lodash';
import { SubTitleProps } from 'pages/Editor/parts/SubTitle/SubTitle.types';

const cx = cn.bind(styles);

const SubTitle: FunctionComponent<SubTitleProps> = props => {
    const { setCurrentArticle } = props;

    const onInput = debounce((value: string) => {
        setCurrentArticle({
            subtitle: value,
        });
    }, 500);

    const textareaProps: TextareaProps = {
        isSingleLine: true,
        type: TEXTAREA_TYPES.ARTICLE_SUBTITLE,
        placeholder: 'Subtitle',
        onInputCallback: onInput,
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default SubTitle;
