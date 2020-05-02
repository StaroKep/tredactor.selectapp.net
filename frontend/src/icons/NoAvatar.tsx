import React, { FunctionComponent } from 'react';

interface NoAvatarProps {
    className?: string;
}

export const NoAvatar: FunctionComponent<NoAvatarProps> = props => (
    <svg
        {...props}
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5093 42C22.4415 38.3421 26.9472 36 32 36C37.0528 36 41.5585 38.3421 44.4907 42C46.6866 39.2608 48 35.7838 48 32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32C16 35.7838 17.3134 39.2608 19.5093 42ZM38 28C38 31.3137 35.3137 34 32 34C28.6863 34 26 31.3137 26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28Z"
            fill="#E1E1E1"
        />
        <circle cx="32" cy="32" r="14.5" stroke="#E1E1E1" strokeWidth="3" />
    </svg>
);
