import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import SearchReducer from './search_reducer';
import ProfileReducer from './profile_reducer';

const EntitiesReducer = combineReducers({
  profile: ProfileReducer,
  restaurants: RestaurantsReducer,
  searches: SearchReducer,
});

export default EntitiesReducer;
