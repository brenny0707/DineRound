import * as APIUtil from '../util/reservation_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RESERVATION_ERRORS = 'RESERVATION_ERRORS';

//regular actions
export const receiveReservations = (reservations) => {
  return {
    type: RECEIVE_RESERVATIONS,
    reservations,
  };
};

export const receiveReservation = (reservation) => {
  return {
    type: RECEIVE_RESERVATION,
    reservation,
  };
};

export const removeReservation = (reservation) => {
  return {
    type: REMOVE_RESERVATION,
    reservation
  };
};

export const reservationError = error => {
  return {
    type: RESERVATION_ERRORS,
    error,
  };
};
//thunk actions

export const createReservation = (reservation) => dispatch => {
  return APIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)));
};
