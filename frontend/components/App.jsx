import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute} from '../util/route_util';
import ConnectedModal from './modal';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';



const App = () => {
  return (
    <div>
      <ConnectedModal />
      <div className="site-bar">
        <a href="/" className="site-bar-logo"></a>
        <GreetingContainer />
      </div>
      {window.location.hash === "#/" ? <div className="home-img-div"></div> : null}
      <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
    </div>
  );
};

export default App;
