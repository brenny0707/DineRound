import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute} from '../util/route_util';
import ConnectedModal from './modal';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';
import SearchRestaurantsForm from './search/search_restaurants_form_container';
import SearchRestaurantsIndex from './search/search_restaurants_index';
import UserProfile from './user/user_profile_container';


const App = () => {
  return (
    <div>
      <ConnectedModal />
      <div className="site-bar">
        <a href="/" className="site-bar-logo"></a>
        <GreetingContainer />
      </div>

      {window.location.hash === "#/" ? <div className="home-img-div"></div> : null}
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/" component={SearchRestaurantsForm} />
      <Route exact path="/restaurants" component={SearchRestaurantsIndex} />
      <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
    </div>
  );
};

// Add home container!
// <Route exact path="/" component={HomeContainer} />
export default App;
