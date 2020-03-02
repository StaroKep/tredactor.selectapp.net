import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { phrases } from './ProjectsPanel.config';
import * as styles from './ProjectsPanel.scss';

const cx = cn.bind(styles);

export const ProjectsPanel: FunctionComponent = () => {
    return (
        <div className={cx('root')}>
            <div className={cx('title')}>{phrases.projects}</div>
        </div>
    );
};

export default ProjectsPanel;
