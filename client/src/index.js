import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/tailwind.css';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import manageCalculations from './reducers/manageCalculations';

let store = createStore(manageCalculations, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
