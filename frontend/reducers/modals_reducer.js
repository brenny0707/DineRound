import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

let initialState = false;

const modalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return action.sessionType;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default modalReducer;
