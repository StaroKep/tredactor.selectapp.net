import React, { FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames/bind';

import getUpdatedArticleContent from 'src/utils/getUpdatedArticleContent';
import { Element, ElementProps } from 'components/Editor/Element';
import { Textarea, TextareaProps } from 'components/Textarea';
import { Text as ArticleText, TextProps as ArticleTextProps } from 'components/Article/Text';

import { phrases } from './Text.config';
import { TextProps } from './Text.types';

import * as styles from './Text.scss';

const cx = cn.bind(styles);

export const Text: FunctionComponent<TextProps> = props => {
    const { elementData, index, articleContent, onSetCurrentArticleContent } = props;
    const { data } = elementData;
    const [text, setText] = useState(data);

    const onTextareaChange = useCallback(
        (newText: string) => {
            setText(newText);
        },
        [setText],
    );

    const onSubmitChangesButtonClick = useCallback(() => {
        const updatedElementData = { ...elementData, data: text };
        const updatedArticleContent = getUpdatedArticleContent({
            index,
            articleContent,
            updatedElementData,
        });

        onSetCurrentArticleContent(updatedArticleContent);
    }, [text, index, elementData, articleContent, onSetCurrentArticleContent]);

    const textareaProps: TextareaProps = {
        value: text,
        autoFocus: true,
        onInput: onTextareaChange,
        placeholder: phrases.someText,
    };

    const buttonChildrenElement = <ArticleText>{text}</ArticleText>;

    const elementProps: ElementProps = {
        articleContent,
        buttonChildrenElement,
        onSubmitChangesButtonClick,
        contentElementIndex: index,
        contentElementData: elementData,
        childrenClassName: cx('children'),
    };

    return (
        <Element {...elementProps}>
            <Textarea {...textareaProps} />
        </Element>
    );
};

export default Text;
