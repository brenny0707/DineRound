import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({
  restaurants: RestaurantsReducer,
  searches: SearchReducer,
});

export default EntitiesReducer;
