import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { OkIcon } from 'icons';
import { Button } from 'components';
import { ButtonTheme } from 'enums';

import { RightMenuElement } from '../RightMenuElement';
import { SaveButtonProps } from './SaveButton.types';

import * as styles from './SaveButton.scss';

const cx = cn.bind(styles);

export const SaveButton: FunctionComponent<SaveButtonProps> = props => {
    const { onClick } = props;

    const rootClassNames = cx('root');

    return (
        <RightMenuElement>
            <Button onClick={onClick} theme={ButtonTheme.LAZY} className={rootClassNames}>
                <OkIcon />
            </Button>
        </RightMenuElement>
    );
};

export default SaveButton;
