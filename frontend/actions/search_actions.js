import * as APIUtil from '../util/search_util';

export const RECEIVE_SEARCHED_TABLES = 'RECEIVE_SEARCHED_TABLES';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';

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

//thunk
export const searchOpenTables = filters => dispatch => {
  return APIUtil.searchOpenTables(filters)
    .then(tables => dispatch(receiveTables(tables)));
};

export const searchRestaurants = name => dispatch => {
  return APIUtil.searchRestaurants(name)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)));
};
