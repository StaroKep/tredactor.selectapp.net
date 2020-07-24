import React, { FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames/bind';
import get from 'lodash/get';

import { ArticleContentType, ButtonTheme, TextColor, TextWeight } from 'enums';
import { ArticleContent } from 'data/entities/article/types';
import addContentElementBefore from 'src/utils/addContentElementBefore';
import addContentElementAfter from 'src/utils/addContentElementAfter';
import addContentElementAtTheEnd from 'src/utils/addContentElementAtTheEnd';
import { Button, ButtonProps } from 'components/Button';
import { Text } from 'components/Text';

import { AddElementButtonProps } from './AddElementButton.types';

import { dataTemplates } from './helpers';

import * as styles from './AddElementButton.scss';

const cx = cn.bind(styles);

export const AddElementButton: FunctionComponent<AddElementButtonProps> = props => {
    const {
        isBefore,
        atTheEnd,
        className,
        contentElementIndex,
        currentArticleContent,
        onSetCurrentArticleContent,
    } = props;

    const [isVisibleMenuElements, setIsVisibleMenuElements] = useState(false);

    const onButtonClick = useCallback(() => {
        setIsVisibleMenuElements(true);
    }, []);

    const onAddTextElementButtonClick = useCallback(
        (contentElementType: ArticleContentType) => () => {
            const newContentElement = get(dataTemplates, [contentElementType]);

            if (!newContentElement) {
                return;
            }

            let newContent: ArticleContent;
            const baseAddContentElementParams = {
                articleContent: currentArticleContent,
                contentElementData: newContentElement,
            };

            if (contentElementIndex !== undefined) {
                const addContentElementParams = {
                    index: contentElementIndex,
                    ...baseAddContentElementParams,
                };

                if (isBefore) {
                    newContent = addContentElementBefore(addContentElementParams);
                } else {
                    newContent = addContentElementAfter(addContentElementParams);
                }
            } else if (atTheEnd) {
                newContent = addContentElementAtTheEnd(baseAddContentElementParams);
            } else {
                return;
            }

            setIsVisibleMenuElements(false);
            onSetCurrentArticleContent(newContent);
        },
        [
            isBefore,
            contentElementIndex,
            currentArticleContent,
            onSetCurrentArticleContent,
            setIsVisibleMenuElements,
        ],
    );

    const rootClassName = cx('root');
    const buttonClassName = cx('button');
    const listButtonClassName = cx('list-button');

    if (isVisibleMenuElements) {
        return (
            <div className={rootClassName}>
                <Button
                    className={listButtonClassName}
                    theme={ButtonTheme.LIGHT}
                    onClick={onAddTextElementButtonClick(ArticleContentType.TEXT)}
                >
                    Text
                </Button>
                <Button
                    className={listButtonClassName}
                    theme={ButtonTheme.LIGHT}
                    onClick={onAddTextElementButtonClick(ArticleContentType.IMAGE)}
                >
                    Image
                </Button>
            </div>
        );
    }

    const rootProps: ButtonProps = {
        onClick: onButtonClick,
        className: cx(buttonClassName, className),
    };

    return (
        <div className={rootClassName}>
            <Button {...rootProps}>
                <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                    +
                </Text>
            </Button>
        </div>
    );
};

export default AddElementButton;
