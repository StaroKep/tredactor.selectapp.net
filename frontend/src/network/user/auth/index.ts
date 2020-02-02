import axios from 'axios';
import { FormProps } from 'pages/Login/parts/Form/Form.types';

interface userAuthData {
    email: string;
    callback: FormProps['setUserData'];
}

export const userAuth = (data: userAuthData) => {
    const { email, callback } = data;

    axios({
        method: 'POST',
        url: 'http://localhost:3000/user/auth',
        data: {
            email,
        },
    })
        .then(() => {
            callback({ email });
        })
        .catch(() => {
            callback({ email: undefined });
        });
};
