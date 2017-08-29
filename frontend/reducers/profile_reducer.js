import { RECEIVE_USER_PROFILE, REMOVE_USER_RESERVATION} from '../actions/profile_actions';
import merge from 'lodash/merge';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      return action.profile;
    case REMOVE_USER_RESERVATION:
      return {};
    default:
      return state;
  }
};

export default ProfileReducer;
