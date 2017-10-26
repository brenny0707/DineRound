import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_STATE = 'CLEAR_STATE';

//regular action creators
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

//thunk action creators
export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => {
      dispatch(clearErrors());
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(user => {
      dispatch(receiveCurrentUser(null));
      dispatch(clearErrors());
    });
};

// export const logout = () => dispatch => {
//   return APIUtil.logout()
//     .then(user => dispatch(receiveCurrentUser(null))
//     .then(() => dispatch(clearErrors())),
//     errors => {
//       dispatch(clearErrors());
//       dispatch(receiveErrors(errors.responseJSON));
//     });
// };

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => {
      dispatch(clearErrors());
      dispatch(receiveErrors(errors.responseJSON));
    });
};
