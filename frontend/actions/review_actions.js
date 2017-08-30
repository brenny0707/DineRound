import * as APIUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

//normal actions
export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

//thunk actions
export const fetchReviews = restaurantId => dispatch => {
  return APIUtil.fetchReviews(restaurantId)
    .then(reviews => {
      dispatch(receiveReviews(reviews));
    });
};

export const fetchReview = reservationId => dispatch => {
  return APIUtil.fetchReview(reservationId)
    .then(review => {
      dispatch(receiveReview(review));
    });
};

export const createReview = review => dispatch => {
  return APIUtil.createReview(review)
    .then(review => {
      dispatch(receiveReview(review));
    });
};
