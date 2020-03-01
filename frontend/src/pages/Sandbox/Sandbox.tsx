import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import * as styles from './Sandbox.scss';

const cx = cn.bind(styles);

const Sandbox: FunctionComponent = () => {
    return (
        <div className={cx('root')}>
            <button className={cx('inner')}>
                <h1>Сохранить изменения</h1>
                <p>Статья сохранится и будет доступа в личном кабинете пользователя</p>
                <div className={cx('icon')}>i</div>
            </button>
            <button className={cx('inner')}>
                <h1>Title</h1>
                <p>Hello, world!</p>
                <div className={cx('icon')}>i</div>
            </button>
            <button className={cx('inner')}>
                <h1>Title</h1>
                <p>Hello, world!</p>
                <div className={cx('icon')}>i</div>
            </button>
            <button className={cx('inner')}>
                <h1>Title</h1>
                <p>Hello, world!</p>
                <div className={cx('icon')}>i</div>
            </button>
            <button className={cx('inner')}>
                <h1>Title</h1>
                <p>Hello, world!</p>
                <div className={cx('icon')}>i</div>
            </button>
        </div>
    );
};

export default Sandbox;
