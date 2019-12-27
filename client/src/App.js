import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ApiPage from './pages/apiPage'
import Navigation from './components/navigation'
import ResultContainer from './containers/ResultContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container mx-auto p-4">
            <Navigation />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/programmatic" component={ApiPage} />
            <Route path="/result/:id" component={ResultContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
