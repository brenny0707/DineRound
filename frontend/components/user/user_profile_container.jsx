import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchUserReservations, deleteUserReservation } from '../../actions/profile_actions';

const mapStateToProps = (state, OwnProps) => {
  const { id, fname, lname, email_address} = state.session.currentUser;
  debugger
  return {
    id,
    fname,
    lname,
    email_address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReservations: () => dispatch(fetchUserReservations)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
