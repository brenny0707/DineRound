import merge from 'lodash/merge';
import { RECEIVE_TABLES } from '../actions/search_actions';

// let defaultParams = {
//   name: null,
//   seats: 2,
//   date: ,
//   time: Date.UTC(),
// }
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
