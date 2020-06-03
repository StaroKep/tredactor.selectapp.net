import { AddElementButtonProps } from 'components/Editor/AddElementButton';

export type AddElementButtonOwnProps = Pick<
    AddElementButtonProps,
    'atTheEnd' | 'isBefore' | 'contentElementIndex' | 'className'
>;

export type AddElementButtonStateToProps = Pick<AddElementButtonProps, 'currentArticleContent'>;

export type AddElementButtonDispatchToProps = Pick<
    AddElementButtonProps,
    'onSetCurrentArticleContent'
>;
