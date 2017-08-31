import merge from 'lodash/merge';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
      return merge({}, state, newRestaurant);
    case RECEIVE_USER_PROFILE:
      return action.restaurants;
    default:
      return state;
  }
};

export default RestaurantsReducer;
