import {SetUserDataAction} from "data/entities/user/actions";

export type UserActions = SetUserDataAction;

export interface UserStoreData {
    email?: string;
}