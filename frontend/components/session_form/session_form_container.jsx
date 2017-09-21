import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { FetchUserProfile } from '../../actions/profile_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.sessionType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.sessionType === "signup"){
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
      closeModal: () => dispatch(closeModal()),
      FetchUserProfile: () => dispatch(FetchUserProfile()),
    };
  }
  else if (ownProps.sessionType === "login") {
    return {
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      closeModal: () => dispatch(closeModal()),
      FetchUserProfile: () => dispatch(FetchUserProfile()),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


//Over here, pass down all the actions for rendering the form
