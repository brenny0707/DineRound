import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
const App = () => {
  return (
    <div>
      <h1>DineRound from App page</h1>
      <GreetingContainer />
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
