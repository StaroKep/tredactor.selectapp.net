import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { TextareaType } from 'enums';
import { Element, ElementProps } from 'components/Editor/Element';
import { Textarea, TextareaProps } from 'components/Textarea';
import { Title as ArticleTitle } from 'components/Article/Title';

import { phrases } from './Title.config';
import { TitleProps } from './Title.types';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

export const Title: FunctionComponent<TitleProps> = props => {
    const { value = '', onSetCurrentArticle } = props;
    const [title, setTitle] = useState(value);

    const onTextareaChange = useCallback(
        (newTitle: string) => {
            setTitle(newTitle);
        },
        [setTitle],
    );

    useEffect(() => {
        setTitle(value);
    }, [value]);

    const onSubmitChangesButtonClick = useCallback(() => {
        onSetCurrentArticle({ title });
    }, [title, onSetCurrentArticle]);

    const textareaProps: TextareaProps = {
        value: title,
        autoFocus: true,
        type: TextareaType.TITLE,
        onInput: onTextareaChange,
        placeholder: phrases.titleOfTheArticle,
    };

    const buttonChildrenElement = <ArticleTitle>{title}</ArticleTitle>;

    const elementProps: ElementProps = {
        buttonChildrenElement,
        onSubmitChangesButtonClick,
    };

    return (
        <Element {...elementProps}>
            <Textarea {...textareaProps} />
        </Element>
    );
};

export default Title;
