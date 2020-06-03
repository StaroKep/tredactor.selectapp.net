import { InputType } from 'enums/inputTypes';

export interface InputProps {
    onChange: (value: string) => void;

    initialValue?: string;
    autoFocus?: boolean;
    type?: InputType;
    placeholder?: string;
    className?: string;
}
