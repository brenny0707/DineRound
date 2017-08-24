import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import EntitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  ui: uiReducer,
});

export default rootReducer;
