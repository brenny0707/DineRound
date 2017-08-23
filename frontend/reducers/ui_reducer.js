import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import modals from './modals_reducer';


const uiReducer = combineReducers({
  modals,
});

export default uiReducer;
