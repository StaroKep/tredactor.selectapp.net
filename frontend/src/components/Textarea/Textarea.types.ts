import { TEXTAREA_TYPES } from 'enums';

export interface TextareaProps {
    isSingleLine?: boolean;
    placeholder?: string;
    type?: TEXTAREA_TYPES;

    onInputCallback?: (value: string) => void;
}
