import { InputType } from 'enums/inputTypes';

export interface InputProps {
    onChange: (value: string) => void;

    autoFocus?: boolean;
    type?: InputType;
    placeholder?: string;
    className?: string;
}
