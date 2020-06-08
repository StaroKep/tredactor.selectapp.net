import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';

import { DeleteElementButtonProps } from './DeleteElementButton.types';

import * as styles from './DeleteElementButton.scss';
import { Text } from 'components/Text';
import { TextWeight } from 'enums/textWeight';
import { TextColor } from 'enums/textColor';
import { phrases } from './DeleteElementButton.config';
import { Button, ButtonProps } from 'components/Button';
import removeContentElement from 'src/utils/removeContentElement';

const cx = cn.bind(styles);

export const DeleteElementButton: FunctionComponent<DeleteElementButtonProps> = props => {
    const { contentElementIndex, currentArticleContent, onSetCurrentArticleContent } = props;

    console.log(contentElementIndex, currentArticleContent);
    const onRemoveButtonClick = useCallback(() => {
        if (contentElementIndex === undefined) {
            return;
        }

        const newContent = removeContentElement({
            index: contentElementIndex,
            articleContent: currentArticleContent,
        });
        console.log(newContent);

        onSetCurrentArticleContent(newContent);
    }, [contentElementIndex, currentArticleContent, onSetCurrentArticleContent]);

    const submitButtonProps: ButtonProps = {
        onClick: onRemoveButtonClick,
        className: cx('root'),
    };

    return (
        <Button {...submitButtonProps}>
            <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                {phrases.remove}
            </Text>
        </Button>
    );
};

export default DeleteElementButton;
