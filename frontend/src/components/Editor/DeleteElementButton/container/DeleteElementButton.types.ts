import { DeleteElementButtonProps } from 'components/Editor/DeleteElementButton';

export type DeleteElementButtonOwnProps = Pick<DeleteElementButtonProps, 'contentElementIndex'>;

export type DeleteElementButtonStateToProps = Pick<
    DeleteElementButtonProps,
    'currentArticleContent'
>;

export type DeleteElementButtonDispatchToProps = Pick<
    DeleteElementButtonProps,
    'onSetCurrentArticleContent'
>;
