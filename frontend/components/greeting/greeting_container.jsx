import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    modalState: state.modals.modalLoaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),

    //import actions from modal reducer here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
