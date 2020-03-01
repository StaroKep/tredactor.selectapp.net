import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import userEpics from 'data/entities/user/epics';
import articleEpics from 'data/entities/article/epics';
import { userReducer } from 'data/entities/user/reducer';
import { articleReducer } from 'data/entities/article/reducer';

import { history } from './history';
import { Store } from './types';
import initialData from './initial';

const initialState: Store = initialData();

const epics = combineEpics(...userEpics, ...articleEpics);
const epicMiddleware = createEpicMiddleware();
const reducers = combineReducers({
    user: userReducer,
    article: articleReducer,
    router: connectRouter(history),
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(history)))
);

// @ts-ignore
epicMiddleware.run(epics);

export default store;
