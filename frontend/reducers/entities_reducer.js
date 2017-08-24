import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';

const EntitiesReducer = combineReducers({
  restaurants: RestaurantsReducer,
});

export default EntitiesReducer;
