import React, { FunctionComponent } from 'react';

export const Exit: FunctionComponent = () => {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="2"
                height="16"
                rx="1"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 26 37.4142)"
                fill="#282828"
            />
            <rect
                x="26"
                y="27.4142"
                width="2"
                height="16"
                rx="1"
                transform="rotate(-45 26 27.4142)"
                fill="#282828"
            />
        </svg>
    );
};
