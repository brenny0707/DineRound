import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal, closeModal} from '../../actions/session_actions';
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (sessionType) => dispatch(openModal(sessionType)),
    //import actions from modal reducer here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);