import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { SaveButtonProps } from './SaveButton.types';

import * as styles from './SaveButton.scss';

const cx = cn.bind(styles);

const SaveButton: FunctionComponent<SaveButtonProps> = props => {
    const { save } = props;

    return (
        <button
            className={cx('root')}
            onClick={() => {
                save();
            }}
        >
            S
        </button>
    );
};

export default SaveButton;
