import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { Exit } from 'src/icons';

import { Title } from './parts/Title';
import { SubTitle } from './parts/SubTitle';
import { PreText } from './parts/PreText';
import { MainContent } from './parts/MainContent';
import { Author } from './parts/Author/container';
import { FreeLogo } from './parts/FreeLogo';

import { EditorProps } from './Editor.types';

import * as styles from './Editor.scss';

const cx = cn.bind(styles);

const Editor: FunctionComponent<EditorProps> = props => {
    const { userEmail } = props;

    const exitLink = userEmail ? '/profile' : '/';

    return (
        <div className={cx('root')}>
            <Link className={cx('exit')} to={exitLink}>
                <Exit />
            </Link>
            <form className={cx('form')}>
                <Title />
                <SubTitle />
                <Author />
                <PreText />
                <MainContent />
                <FreeLogo />
            </form>
        </div>
    );
};

export default Editor;
