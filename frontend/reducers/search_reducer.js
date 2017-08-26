import merge from 'lodash/merge';
import { RECEIVE_TABLES } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
      case RECEIVE_TABLES:
        return action.tables;
      default:
        return state;
  }
};

export default SearchReducer;
