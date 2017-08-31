import merge from 'lodash/merge';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../actions/review_actions';
import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import { CLEAR_STATE } from '../actions/session_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      return merge({}, state, action.reviews);
    case CLEAR_STATE:
      return {};
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return action.review;
    default:
      return state;
  }
};

export default ReviewsReducer;
