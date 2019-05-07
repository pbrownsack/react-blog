import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const Sack = () => {
  return <h1>Hey there. Goodbye!</h1>
}

const App = (props) => {
  return (
      <Provider store={props.store}>
        <Router>
          <div className="App">
            <h1>Eat my ass</h1>
          </div>
        </Router>
      </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
