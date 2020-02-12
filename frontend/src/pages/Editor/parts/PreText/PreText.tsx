import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';
import { debounce } from 'lodash';

import { TEXTAREA_TYPES } from 'enums';
import { Textarea, TextareaProps } from 'components/Textarea';

import { PreTextProps } from './PreText.types';

import * as styles from './PreText.scss';

const cx = cn.bind(styles);

const PreText: FunctionComponent<PreTextProps> = props => {
    const { setCurrentArticle } = props;

    const onInput = debounce((value: string) => {
        setCurrentArticle({
            pretext: value,
        });
    }, 500);

    const textareaProps: TextareaProps = {
        isSingleLine: true,
        type: TEXTAREA_TYPES.ARTICLE_PRETEXT,
        placeholder: 'Pretext',
        onInputCallback: onInput,
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default PreText;
