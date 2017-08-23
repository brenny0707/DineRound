import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute} from '../util/route_util';
const App = () => {
  return (
    <div>
      <div className="site-bar">
        <div className="site-bar-logo">
          <h1>DineRound</h1>
        </div>
        <GreetingContainer />
      </div>
      <div className="modal-overlay">
        {/*CODE FOR MODAL ONCE COMPLETED*/}
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
      <div className="home-img-div"></div>

    </div>
  );
};

export default App;
