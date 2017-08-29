import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { FetchUserProfile, deleteUserReservation } from '../../actions/profile_actions';

const mapStateToProps = (state, OwnProps) => {
  const { id, fname, lname, email_address} = state.session.currentUser;
  return {
    profile: state.entities.profile,
    reservations: state.entities.reservations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchUserProfile: () => dispatch(FetchUserProfile()),
    deleteUserReservation: (id) => dispatch(deleteUserReservation(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
