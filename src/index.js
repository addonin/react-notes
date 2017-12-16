import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from './App';
import ItemReducer from './reducers/ItemReducer';

function reducers(state = {}, action) {
    return {
        items: ItemReducer(state.items, action)
    }
}

export const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();




