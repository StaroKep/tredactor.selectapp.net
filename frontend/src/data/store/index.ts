import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import userEpics from 'data/entities/user/epics';

import { userReducer } from 'data/entities/user/reducer';
import { Store } from './types';
import initialData from './initial';

const initialState: Store = initialData();

const epics = combineEpics(...userEpics);
const epicMiddleware = createEpicMiddleware();
const reducers = combineReducers({ user: userReducer });

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);

export default store;
