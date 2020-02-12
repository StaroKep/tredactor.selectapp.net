import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';
import { debounce } from 'lodash';

import { Textarea, TextareaProps } from 'components/Textarea';
import { TEXTAREA_TYPES } from 'enums/Textarea';

import { MainContentProps } from './MainContent.types';

import * as styles from './MainContent.scss';

const cx = cn.bind(styles);

const MainContent: FunctionComponent<MainContentProps> = props => {
    const { setCurrentArticle } = props;

    const onInput = debounce((value: string) => {
        setCurrentArticle({
            text: value,
        });
    }, 500);

    const textareaProps: TextareaProps = {
        isSingleLine: false,
        type: TEXTAREA_TYPES.ARTICLE_TEXT,
        placeholder: 'Text',
        onInputCallback: onInput,
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default MainContent;
