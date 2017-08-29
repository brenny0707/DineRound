import * as APIUtil from '../util/profile_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const REMOVE_USER_RESERVATION = 'REMOVE_USER_RESERVATION';

//regular actions

export const receiveUserProfile = ({profile, reservations}) => {
  return {
    type: RECEIVE_USER_PROFILE,
    profile,
    reservations
  };
};

export const removeUserReservation = (reservation) => {
  return {
    type: REMOVE_USER_RESERVATION,
    reservation
  };
};

//thunk actions

export const FetchUserProfile = () => dispatch => {
  return APIUtil.FetchUserProfile()
    .then(profile => dispatch(receiveUserProfile(profile)));
};

export const deleteUserReservation = (id) => dispatch => {
  return APIUtil.deleteUserReservation(id)
    .then(reservation => dispatch(removeUserReservation(reservation)));
};
