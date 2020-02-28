import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import reduces from './reduces';

const store = createStore(
    reduces,
    applyMiddleware(thunk)
)
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));