import * as APIUtil from '../util/profile_util';

export const RECEIVE_USER_RESERVATIONS = 'RECEIVE_USER_RESERVATIONS';
export const REMOVE_USER_RESERVATION = 'REMOVE_USER_RESERVATION';

//regular actions

export const receiveUserReservations = (reservations) => {
  return {
    type: RECEIVE_USER_RESERVATIONS,
    reservations,
  };
};

export const removeUserReservation = (reservation) => {
  return {
    type: REMOVE_USER_RESERVATION,

  };
};

//thunk actions

export const fetchUserReservations = () => dispatch => {
  return APIUtil.fetchUserReservations()
    .then(reservations => dispatch(receiveUserReservations(reservations)));
};

export const deleteUserReservation = (id) => dispatch => {
  return APIUtil.deleteUserReservation(id)
    .then(reservation => dispatch(removeUserReservation(reservation)));
};
