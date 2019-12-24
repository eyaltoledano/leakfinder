import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ResultPage from './pages/resultPage'
import ApiPage from './pages/apiPage'
import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container mx-auto p-4">
            <Navigation />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/programmatic" component={ApiPage} />
        </div>
      </Router>
    );
  }
}

export default App;
