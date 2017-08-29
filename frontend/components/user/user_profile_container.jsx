import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchUserReservations, deleteUserReservation } from '../../actions/profile_actions';

const mapStateToProps = (state, OwnProps) => {
  const { id, fname, lname, email_address} = state.session.currentUser;
  return {
    profile: state.entities.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReservations: () => dispatch(fetchUserReservations()),
    deleteUserReservation: (id) => dispatch(deleteUserReservation(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
