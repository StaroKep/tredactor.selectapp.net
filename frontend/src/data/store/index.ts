import { createStore } from 'redux';
import commonReducer from 'data/reducers/commonReducer';

export interface Store {
    applicationName: string;
}

const initialState: Store = {
    applicationName: 'TREDACTOR.RU',
};

export default createStore(commonReducer, initialState);
