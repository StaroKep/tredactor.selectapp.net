import { KeyboardEvent, ClipboardEvent } from 'react';

import { KEYS } from './types';

export const singleLineContentEditableOnKeyDown = (
    e: KeyboardEvent<HTMLDivElement>
) => {
    const { nativeEvent } = e;
    const { key } = nativeEvent;

    if (key === KEYS.ENTER) {
        e.stopPropagation();
        e.preventDefault();
    }
};

export const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const text = e.nativeEvent?.clipboardData?.getData('text/plain');
    document.execCommand('insertText', false, text);
};
