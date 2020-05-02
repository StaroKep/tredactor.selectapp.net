import React, { FunctionComponent, HTMLAttributes } from 'react';

export const Exit: FunctionComponent<HTMLAttributes<HTMLOrSVGElement>> = props => {
    return (
        <svg {...props} width="15" height="15" viewBox="0 0 15 15" fill="none">
            <rect
                width="2"
                height="16"
                rx="1"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 12.4142)"
                fill="#282828"
            />
            <rect
                x="1"
                y="2.41422"
                width="2"
                height="16"
                rx="1"
                transform="rotate(-45 1 2.41422)"
                fill="#282828"
            />
        </svg>
    );
};
