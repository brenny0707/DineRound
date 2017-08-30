import * as APIUtil from '../util/restaurant_util';
import { clearSearches } from './search_actions';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  };
};
export const receiveRestaurant = restaurant => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant,
  };
};

//thunk actions
export const fetchRestaurant = id => dispatch => {
  return APIUtil.fetchRestaurant(id)
    .then(restaurant => {
      dispatch(receiveRestaurant(restaurant));
      dispatch(clearSearches());
    });
};
