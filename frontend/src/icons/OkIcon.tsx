import React, { FunctionComponent, HTMLAttributes } from 'react';

export const OkIcon: FunctionComponent<HTMLAttributes<HTMLOrSVGElement>> = props => {
    return (
        <svg {...props} width="15" height="15" viewBox="0 0 15 15" fill="none">
            <rect
                width="2"
                height="14"
                rx="1"
                transform="matrix(0.866026 0.5 0.5 -0.866026 5 13.1244)"
                fill="#282828"
            />
            <rect
                x="0.774223"
                y="6.22328"
                width="2"
                height="9"
                rx="1"
                transform="rotate(-34 0.774223 6.22328)"
                fill="#282828"
            />
        </svg>
    );
};
