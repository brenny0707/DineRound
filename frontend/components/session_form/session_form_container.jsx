import React from 'react';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.location.pathname === "/signup"){
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors())
    };
  }
  else if (ownProps.location.pathname === "/login") {
    return {
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors())
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
