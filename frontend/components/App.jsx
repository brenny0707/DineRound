import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './greeting/footer';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ConnectedModal from './modal';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';
import SearchRestaurantsForm from './search/search_restaurants_form_container';
import SearchRestaurantsIndex from './search/search_restaurants_index';
import UserProfile from './user/user_profile_container';
import ReservationReviewForm from './user/reservation_review_form';
import EditReservationReviewForm from './user/edit_reservation_review_form';
import UserFavorites from './user/user_favorites';
import FeaturedRestaurantsIndex from './restaurant/featured_restaurants_index';


const App = () => {
  return (
    <div>
      <ConnectedModal />
      <div className="site-bar">
        <a href="/" className="site-bar-logo"></a>
        <GreetingContainer />
      </div>

      {window.location.hash === "#/" ?
        <div className="home-img-div"></div> : null}



      <ProtectedRoute exact path="/profile/favorites" component={UserFavorites} />
      <ProtectedRoute exact path="/profile" component={UserProfile} />
      <Route exact path="/" component={SearchRestaurantsForm} />
      <Route exact path="/" component={FeaturedRestaurantsIndex} />
      <Route exact path="/restaurants" component={SearchRestaurantsIndex} />
      <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
      <ProtectedRoute exact path="/reservations/:reservationId/review" component={ReservationReviewForm}/>
      <ProtectedRoute path="/reservations/:reservationId/review/edit" component={EditReservationReviewForm}/>

      <Footer />
    </div>
  );
};
export default App;
