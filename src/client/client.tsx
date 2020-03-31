import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// API from redux createStore(<reducer>)
import { createStore, applyMiddleware } from 'redux';
// Component from react-redux help share store to all container components
import { Provider } from 'react-redux';
// Import the reducer function with arbitrary name
import rootReducer from './redux/reducers';
// Import thunk
import thunk from 'redux-thunk';
// Import redux logger
import { createLogger } from 'redux-logger';
// Root State for App
import { initState } from './redux/initState';
// Router for App deep links
import { BrowserRouter as Router } from 'react-router-dom';

//const middlewares = [ thunk ];
const middlewares = [ thunk, createLogger() ]; 

const appStore = createStore(rootReducer, initState, applyMiddleware(...middlewares));

ReactDOM.render(
<Provider store={ appStore }>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('app'));
