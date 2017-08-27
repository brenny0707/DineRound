import merge from 'lodash/merge';
import { RECEIVE_SEARCHED_TABLES, RECEIVE_SEARCHED_RESTAURANTS } from '../actions/search_actions';

// let defaultParams = {
//   name: null,
//   seats: 2,
//   date: ,
//   time: Date.UTC(),
// }
const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
      case RECEIVE_SEARCHED_TABLES:
        return action.tables;
      case RECEIVE_SEARCHED_RESTAURANTS:
        return action.restaurants;
      default:
        return state;
  }
};

export default SearchReducer;
