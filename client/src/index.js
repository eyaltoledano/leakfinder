import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ResultPage from './pages/resultPage'
import ApiPage from './pages/apiPage'

// import manageCalculations from './reducers/manageCalculations'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import Navigation from './components/navigation'


ReactDOM.render((
  <Router>
    <div className="container mx-auto p-4 mt-4">
      <div className="float-right">
        <Navigation />
      </div>
    </div>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/programmatic" component={ApiPage} />
    <Route path="/result" component={ResultPage} />
  </Router>),
  document.getElementById('root')
);
