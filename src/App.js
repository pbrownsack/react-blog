import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Eat my ass</h1>
      </div>

      <Route exact path="/" component={App} />
    </Router>
  );
}

export default App;
