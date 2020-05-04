import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Exit } from 'icons';
import { Button } from 'components';
import { ButtonTheme } from 'enums';

import { RightMenuElement } from '../RightMenuElement';
import { CloseButtonProps } from './CloseButton.types';

import * as styles from './CloseButton.scss';

const cx = cn.bind(styles);

export const CloseButton: FunctionComponent<CloseButtonProps> = props => {
    const { onClick } = props;

    const rootClassNames = cx('root');

    return (
        <RightMenuElement>
            <Button onClick={onClick} className={rootClassNames} theme={ButtonTheme.LAZY}>
                <Exit />
            </Button>
        </RightMenuElement>
    );
};

export default CloseButton;
