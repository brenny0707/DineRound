import merge from 'lodash/merge';
import { RECEIVE_SEARCHED_TABLES, RECEIVE_SEARCHED_RESTAURANTS, CLEAR_SEARCHES, RECEIVE_SUGGESTIONS } from '../actions/search_actions';

// let defaultParams = {
//   name: null,
//   seats: 2,
//   date: ,
//   time: Date.UTC(),
// }

const nullState = {
  restaurants: {},
  tables: {},
  suggestions: {}
};

const SearchReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
      case RECEIVE_SEARCHED_TABLES:
        return Object.assign({}, state, { tables: action.tables});
      case RECEIVE_SEARCHED_RESTAURANTS:
        return Object.assign({}, state, { restaurants: action.restaurants});
      case RECEIVE_SUGGESTIONS:
        return Object.assign({}, state, { suggestions: action.suggestions});
      case CLEAR_SEARCHES:
        return nullState;
      default:
        return state;
  }
};

export default SearchReducer;
