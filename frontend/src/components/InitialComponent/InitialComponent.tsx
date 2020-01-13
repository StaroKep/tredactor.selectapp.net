import React, { ComponentProps, FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CommonAction } from 'data/actions';
import cn from 'classnames/bind';

import { Store } from 'data/store';

import * as styles from './InitialComponent.scss';

const cx = cn.bind(styles);

interface InitialComponentProps {
    applicationName: string;
}

export const InitialComponent: FunctionComponent<InitialComponentProps> = (
    props: InitialComponentProps
) => {
    const { applicationName } = props;
    return <div className={cx('root')}>{applicationName}</div>;
};

const mapStateToProps = (state: Store) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        CommonAction: () => dispatch(CommonAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialComponent);
