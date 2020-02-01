import { LoginProps } from 'pages/Login/Login.types';

export enum FormFieldNames {
    EMAIL = 'email',
}

export interface FormProps {
    setUserData: LoginProps['setUserData'];
}
