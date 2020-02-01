import {SET_USER_DATA} from "data/entities/user/actions";
import {UserActions} from "data/entities/user/types";
import {setUserEmail} from "src/services/LocalStorage/setters";

export const userReducer = (state = {}, action: UserActions) => {
    const { type } = action;

    switch (type) {
        case SET_USER_DATA:
            const { payload } = action;
            const { email } = payload;

            setUserEmail(email);
            return { ...state, email };
        default: return state;
    }
};