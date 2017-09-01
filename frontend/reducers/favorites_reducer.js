import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      return merge({}, state, action.favorites);
    case RECEIVE_FAVORITE:
      const newFavorite = {[action.favorite.id]: action.favorite};
      return merge({}, state, newFavorite);
    case REMOVE_FAVORITE:
      nextState = merge({}, state);
      delete nextState[action.favorite.id];
      return nextState;
    default:
      return state;
  }
};

export default FavoritesReducer;
