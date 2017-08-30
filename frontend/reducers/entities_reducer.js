import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import SearchReducer from './search_reducer';
import ProfileReducer from './profile_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from
  './reviews_reducer';
const EntitiesReducer = combineReducers({
  profile: ProfileReducer,
  restaurants: RestaurantsReducer,
  reservations: ReservationsReducer,
  reviews: ReviewsReducer,
  searches: SearchReducer,
});

export default EntitiesReducer;
