import React, { FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames/bind';

import getUpdatedArticleContent from 'src/utils/getUpdatedArticleContent';
import { Element, ElementProps } from 'components/Editor/Element';
import { Title as ArticleTitle } from 'components/Article/Title';
import { Input, InputProps } from 'components/Input';
import { Image as ArticleImage, ImageProps as ArticleImageProps } from 'components/Article/Image';

import { phrases } from './Image.config';
import { ImageProps } from './Image.types';

import * as styles from './Image.scss';

const cx = cn.bind(styles);

export const Image: FunctionComponent<ImageProps> = props => {
    const { elementData, index, articleContent, onSetCurrentArticleContent } = props;
    const { data } = elementData;
    const [imageURL, setImageURL] = useState(data);

    const onInputChange = useCallback(
        (newImage: string) => {
            setImageURL(newImage);
        },
        [setImageURL],
    );

    const onSubmitChangesButtonClick = useCallback(() => {
        const updatedElementData = { ...elementData, data: imageURL };
        const updatedArticleContent = getUpdatedArticleContent({
            index,
            articleContent,
            updatedElementData,
        });

        onSetCurrentArticleContent(updatedArticleContent);
    }, [imageURL, index, elementData, articleContent, onSetCurrentArticleContent]);

    const inputProps: InputProps = {
        initialValue: imageURL,
        autoFocus: true,
        onChange: onInputChange,
        placeholder: phrases.someImage,
    };

    const buttonChildrenElement = <ArticleImage src={imageURL} />;

    const elementProps: ElementProps = {
        articleContent,
        buttonChildrenElement,
        onSubmitChangesButtonClick,
        contentElementIndex: index,
        contentElementData: elementData,
    };

    return (
        <Element {...elementProps}>
            <Input {...inputProps} />
        </Element>
    );
};

export default Image;
