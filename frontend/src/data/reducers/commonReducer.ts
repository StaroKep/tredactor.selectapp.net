import { AnyAction } from 'redux';

export default function commonReducer(state = {}, action: AnyAction) {
    switch (action.type) {
        case "INITIAL_STATE":
            return {
                ...state,
                ready: action.payload
            };
        default:
            return state
    }
}