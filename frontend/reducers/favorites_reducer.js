import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      return merge({}, state, action.favorites);
    default:
      return state;
  }
};

export default FavoritesReducer;
