import * as APIUtil from '../util/search_util';

export const RECEIVE_SEARCHED_TABLES = 'RECEIVE_SEARCHED_TABLES';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const SEARCH_ERRORS = 'SEARCH_ERRORS';
export const CLEAR_SEARCHES = 'CLEAR_SEARCHES';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';

export const receiveTables = tables => {
  return {
    type: RECEIVE_SEARCHED_TABLES,
    tables,
  };
};

export const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_SEARCHED_RESTAURANTS,
    restaurants,
  };
};

export const searchErrors = errors => {
  return {
    type: SEARCH_ERRORS,
    errors,
  };
};

export const clearSearches = () => {
  return {
    type: CLEAR_SEARCHES,
  };
};

export const receiveSuggestions = suggestions => {
  return {
    type: RECEIVE_SUGGESTIONS,
    suggestions,
  };
};

//thunk
export const searchOpenTables = filters => dispatch => {
  return APIUtil.searchOpenTables(filters)
    .then(tables => dispatch(receiveTables(tables)));
};

export const searchRestaurants = name => dispatch => {
  return APIUtil.searchRestaurants(name)
    .then(restaurants => {
      dispatch(clearSearches());
      dispatch(receiveRestaurants(restaurants));
    });
};

export const searchSuggestions = () => dispatch => {
  return APIUtil.searchSuggestions().then(restaurants => {
    const suggestions = restaurants.map( restaurant => {
      return restaurant["name"];
    });
    dispatch(receiveSuggestions(suggestions));
  });
};
