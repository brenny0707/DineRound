import merge from 'lodash/merge';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  let restaurantId;
  let idxOf;
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
      return merge({}, state, newRestaurant);
    case RECEIVE_USER_PROFILE:
      return merge({}, state, action.restaurants);
    case RECEIVE_FAVORITE:
      nextState = merge({}, state);
      restaurantId = action.favorite.restaurant_id;
      nextState[restaurantId].favoritedUserIds.push(action.favorite.user_id);
      return nextState;
    case REMOVE_FAVORITE:
      nextState = merge({}, state);
      restaurantId = action.favorite.restaurant_id;
      idxOf = nextState[restaurantId].favoritedUserIds.indexOf(action.favorite.user_id);
      nextState[restaurantId].favoritedUserIds.splice(idxOf, 1);
      return nextState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
