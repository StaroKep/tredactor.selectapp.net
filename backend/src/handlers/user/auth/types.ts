import { User } from 'handlers/user/types';

export interface RequestBody {
    uid: User['id'];
    password: User['password'];
}
