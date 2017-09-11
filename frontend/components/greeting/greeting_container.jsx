import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors, logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal, closeModal} from '../../actions/modal_actions';
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (sessionType) => dispatch(openModal(sessionType)),
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    //import actions from modal reducer here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
