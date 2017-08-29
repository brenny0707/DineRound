import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, RESERVATION_ERRORS } from '../actions/reservation_actions';
import { REMOVE_USER_RESERVATION } from '../actions/profile_actions';
import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
    const reservations = action.reservations.reduce((acc, reservation) => {
      acc[reservation.reservationId] = reservation;
      return acc;
    }, {});
      return merge({}, state, reservations);
    case RECEIVE_RESERVATION:
      return merge({}, state, {[action.reservation.id]: action.reservation});
    case REMOVE_USER_RESERVATION:
      nextState = merge({}, state);
      delete nextState[action.reservation.id];
      return nextState;
    case RESERVATION_ERRORS:
      alert(action.error);
    default:
      return state;
  }
};

export default ReservationsReducer;
