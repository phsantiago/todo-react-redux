import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer'
import App from './App';
import './index.css';

const store = createStore(todoApp)

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
