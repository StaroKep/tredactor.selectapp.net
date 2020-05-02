import React, { FunctionComponent, useCallback, MouseEvent, useState } from 'react';
import cn from 'classnames/bind';

import text from 'src/text';
import { userAuth } from 'network';

import { FormFieldNames, FormProps } from './Form.types';

import * as styles from './Form.scss';

const cx = cn.bind(styles);

const Form: FunctionComponent<FormProps> = props => {
    const { setUserData } = props;
    const [email, setEmail] = useState('');

    const buttonOnClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
            userAuth({
                email,
                callback: setUserData,
            });
        },
        [email],
    );

    return (
        <div className={cx('root')}>
            <form>
                <input
                    type="email"
                    name={FormFieldNames.EMAIL}
                    placeholder={text.Email}
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                />
                <button onClick={buttonOnClick}>{text.Login}</button>
            </form>
        </div>
    );
};

export default Form;
