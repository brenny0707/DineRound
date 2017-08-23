import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  //ui: uiReducer,
});

export default rootReducer;
