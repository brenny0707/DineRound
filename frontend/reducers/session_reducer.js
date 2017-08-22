import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

let nullUser = { currentUser: null, errors: [] };

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};


export default SessionReducer;
