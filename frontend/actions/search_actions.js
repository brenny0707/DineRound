import * as APIUtil from '../util/search_util';

export const RECEIVE_SEARCHED_TABLES = 'RECEIVE_SEARCHED_TABLES';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const SEARCH_ERRORS = 'SEARCH_ERRORS';

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

//thunk
export const searchOpenTables = filters => dispatch => {
  return APIUtil.searchOpenTables(filters)
    .then(tables => dispatch(receiveTables(tables)));
};

export const searchRestaurants = name => dispatch => {
  return APIUtil.searchRestaurants(name)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)));
};
