import { SetCurrentArticleAction } from 'data/entities/article/actions';

export interface SaveButtonProps {
    save: (data: SetCurrentArticleAction['payload']) => void;
}
