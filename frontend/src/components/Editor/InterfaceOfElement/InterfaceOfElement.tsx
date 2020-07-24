import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';

import { ButtonTheme, TextColor, TextWeight } from 'enums';
import { Button, ButtonProps } from 'components/Button';

import { phrases } from './InterfaceOfElement.config';
import { InterfaceOfElementProps } from './InterfaceOfElement.types';

import * as styles from './InterfaceOfElement.scss';
import { Text } from 'components/Text';
import {DeleteElementButton} from "components/Editor/DeleteElementButton/container";

const cx = cn.bind(styles);

export const InterfaceOfElement: FunctionComponent<InterfaceOfElementProps> = props => {
    const { children, onHideInterface, onSubmitChangesButtonClick, elementIndex } = props;
    const rootClassName = cx('root');

    const onSubmitButtonClick = useCallback(() => {
        onHideInterface();
        onSubmitChangesButtonClick();
    }, [onHideInterface, onSubmitChangesButtonClick]);

    const submitButtonProps: ButtonProps = {
        onClick: onSubmitButtonClick,
        className: cx('submit-button'),
    };

    return (
        <div className={rootClassName}>
            {children}
            <Button {...submitButtonProps}>
                <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                    {phrases.submitChanges}
                </Text>
            </Button>
            <DeleteElementButton contentElementIndex={elementIndex} />
            <Button {...submitButtonProps} onClick={onHideInterface}>
                <Text weight={TextWeight.BOLD} color={TextColor.WHITE}>
                    {phrases.close}
                </Text>
            </Button>
        </div>
    );
};

export default InterfaceOfElement;
