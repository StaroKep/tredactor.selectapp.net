import { ReactNode } from 'react';
import {ArticleContent, ArticleContentElement} from "data/entities/article/types";

export interface ElementProps {
    buttonChildrenElement: ReactNode,
    onSubmitChangesButtonClick: () => void;
    articleContent?: ArticleContent;
    contentElementData?: ArticleContentElement;
    contentElementIndex?: number;
    interfaceButtons?: ReactNode;
    childrenClassName?: string;
}
