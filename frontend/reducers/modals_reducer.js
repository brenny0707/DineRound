import { OPEN_MODAL, CLOSE_MODAL } from '../actions/session_actions';

let initialState = {
  modalLoaded: false,
};

const modalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalLoaded: true,
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalLoaded: false,
      });
  }
};

export default modalReducer;
