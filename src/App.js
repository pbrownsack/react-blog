import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import PageView from './components/PageView';
import HomePage from './containers/Home';
import ProjectsPage from './containers/Projects';
import AdminPage from './containers/Admin';
import AboutPage from './containers/About';
import GamesPage from './containers/Games';
import './App.css';

const App = (props) => {
  return (
      <Provider store={props.store}>
        <Router>
          <div className="App">
            <SideBar />

            <PageView>
              <Route exact path="/" component={HomePage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/games" component={GamesPage} />
              <Route path="/admin" component={AdminPage} />
            </PageView>
          </div>
        </Router>
      </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
