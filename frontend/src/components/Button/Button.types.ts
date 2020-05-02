import { ButtonHTMLAttributes } from 'react';
import { ButtonTheme } from 'enums/buttonTheme';

export type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    className?: string;
    isLink?: boolean;
    to?: string;
    theme?: ButtonTheme;
};
