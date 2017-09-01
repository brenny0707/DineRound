import { RECEIVE_USER_PROFILE, REMOVE_USER_RESERVATION} from '../actions/profile_actions';
import merge from 'lodash/merge';
import { CLEAR_STATE } from '../actions/session_actions';
import { REMOVE_FAVORITE } from '../actions/favorite_actions';


const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  let idxOf;

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      return merge({}, state, action.profile);
    case REMOVE_USER_RESERVATION:
      nextState = merge({}, state);
      let removeIdx = nextState.reservationIds.indexOf(action.reservation.id);
      nextState.reservationIds.splice(removeIdx, 1);
      return nextState;
    case REMOVE_FAVORITE:
      nextState = merge({}, state);
      idxOf = nextState.favoriteIds.indexOf(action.favorite.id);
      nextState.favoriteIds.splice(idxOf, 1);
      return nextState;
    default:
      return state;
  }
};

export default ProfileReducer;
