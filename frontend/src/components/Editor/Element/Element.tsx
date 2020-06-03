import React, { FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames/bind';

import { InterfaceOfElement, InterfaceOfElementProps } from 'components/Editor/InterfaceOfElement';
import {
    AddElementButton,
    AddElementButtonOwnProps,
} from 'components/Editor/AddElementButton/container';

import { ElementProps } from './Element.types';

import * as styles from './Element.scss';

const cx = cn.bind(styles);

export const Element: FunctionComponent<ElementProps> = props => {
    const {
        children,
        articleContent,
        interfaceButtons,
        childrenClassName,
        contentElementData,
        contentElementIndex,
        buttonChildrenElement,
        onSubmitChangesButtonClick,
    } = props;
    const [isVisibleInterface, setIsVisibleInterface] = useState(false);

    const onButtonClick = useCallback(() => setIsVisibleInterface(true), []);
    const onHideInterface = useCallback(() => setIsVisibleInterface(false), []);

    const rootProps = {
        className: cx('root'),
    };
    const rootButtonProps = {
        onClick: onButtonClick,
        className: cx('root', 'root_button'),
    };

    const interfaceOfElementProps = {
        onHideInterface,
        onSubmitChangesButtonClick,
    };

    if (isVisibleInterface && contentElementIndex !== undefined) {
        const rootContentProps = {
            className: cx('root', 'root_content'),
        };

        const beforeAddElementButtonProps: AddElementButtonOwnProps = {
            isBefore: true,
            contentElementIndex,
            className: cx('before-add-element-button'),
        };
        const afterAddElementButtonProps: AddElementButtonOwnProps = {
            contentElementIndex,
            className: cx('after-add-element-button'),
        };

        return (
            <div {...rootContentProps}>
                <AddElementButton {...beforeAddElementButtonProps} />
                <div className={cx('element')}>
                    <div className={cx('children', childrenClassName)}>{children}</div>
                    <InterfaceOfElement {...interfaceOfElementProps}>
                        {interfaceButtons}
                    </InterfaceOfElement>
                </div>
                {/*<AddElementButton {...afterAddElementButtonProps} />*/}
            </div>
        );
    }

    if (isVisibleInterface) {
        return (
            <div {...rootProps}>
                <div className={cx('children', childrenClassName)}>{children}</div>
                <InterfaceOfElement {...interfaceOfElementProps}>
                    {interfaceButtons}
                </InterfaceOfElement>
            </div>
        );
    }

    return (
        <button {...rootButtonProps}>
            <div className={cx('children', childrenClassName)}>{buttonChildrenElement}</div>
        </button>
    );
};

export default Element;
