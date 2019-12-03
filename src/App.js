import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import PrivacyContainer from './containers/PrivacyContainer';
import ContactContainer from './containers/ContactContainer';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route path="/about">
          <AboutContainer />
        </Route>

        <Route path="/privacy">
          <PrivacyContainer />
        </Route>

        <Route path="/contact">
          <ContactContainer />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
