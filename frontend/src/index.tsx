import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'data/store';
import { InitialComponent } from 'components/InitialComponent';

ReactDOM.render(
    <Provider store={store}>
        <InitialComponent />
    </Provider>,
    document.body
);
