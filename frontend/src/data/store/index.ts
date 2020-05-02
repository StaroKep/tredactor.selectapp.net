import { createStore, combineReducers, applyMiddleware, compose, CombinedState } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import userEpics from 'data/entities/user/epics';
import articleEpics from 'data/entities/article/epics';
import { userReducer } from 'data/entities/user/reducer';
import { articleReducer } from 'data/entities/article/reducer';

import { history } from './history';
import { Store, ExtendedWindow, ExtendedStore } from './types';
import initialData from './initial';

const extendedWindow = window as ExtendedWindow;

const epicMiddleware = createEpicMiddleware();
const epics = combineEpics(...userEpics, ...articleEpics);

const reducers = combineReducers<CombinedState<ExtendedStore>>({
    user: userReducer,
    article: articleReducer,
    router: connectRouter(history),
});

const initialState: Store = initialData();

const composeEnhancers = extendedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(history))),
);

epicMiddleware.run(epics);

export default store;
