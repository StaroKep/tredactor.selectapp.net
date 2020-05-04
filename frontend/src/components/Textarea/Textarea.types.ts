import { TextareaType } from 'enums';

export interface TextareaProps {
    value?: string;
    onInput: (value: string) => void;
    placeholder?: string;
    type?: TextareaType;
}
