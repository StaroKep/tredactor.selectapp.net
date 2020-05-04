import { EditorProps } from 'pages/Editor';

export type EditorStateToProps = Pick<EditorProps, 'userEmail' | 'currentArticle'>;

export type EditorDispatchToProps = Pick<
    EditorProps,
    'onSetCurrentArticle' | 'onSaveCurrentArticle' | 'onGoBack'
>;
