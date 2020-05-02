import { TextType } from 'enums/textType';
import { TextTag } from 'enums/textTag';
import { TextAlign } from 'enums/textAlign';
import { TextWeight } from 'enums/textWeight';
import { TextColor } from 'enums/textColor';

export interface TextProps {
    color?: TextColor;
    type?: TextType;
    tag?: TextTag;
    align?: TextAlign;
    weight?: TextWeight;
    isUppercase?: boolean;
    className?: string;
}
