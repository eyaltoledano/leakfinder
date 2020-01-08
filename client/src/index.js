import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/tailwind.css';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import manageCalculations from './reducers/manageCalculations';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(manageCalculations, composeWithDevTools(applyMiddleware(thunk))); // intercepts

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
