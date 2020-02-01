import { createStore, combineReducers } from 'redux';
import { userReducer } from 'data/entities/user/reducer';
import { Store } from './types';
import initialData from './initial';

const initialState: Store = initialData();

const reducers = combineReducers({ user: userReducer });

export default createStore(
    reducers,
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
