import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import SessionFormContainer from './session_form/session_form_container';

const Modal = (props) => {
  if( props.open ) {
    return (
    <div id="modal-overlay" onClick={props.closeModal}>
      <SessionFormContainer sessionType={props.open} />
    </div>
    );
  }
  else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    open: state.ui.modals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
