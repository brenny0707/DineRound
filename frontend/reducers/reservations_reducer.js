import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION, RESERVATION_ERRORS } from '../actions/reservation_actions';
import { RECEIVE_USER_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
    const reservations = action.profile.reservations.reduce((acc, reservation) => {
      acc[reservation.reservationId] = reservation;
      return acc;
    }, {});
      return merge({}, state, reservations);
    // case RECEIVE_RESERVATIONS:
    //   return action.reservations;
    case RECEIVE_RESERVATION:
      return action.reservation;
    case REMOVE_RESERVATION:
      nextState = merge({}, state);
      return nextState;
    case RESERVATION_ERRORS:
      alert(action.error);
    default:
      return state;
  }
};

export default ReservationsReducer;
