import * as APIUtil from '../util/search_util';

export const RECEIVE_TABLES = 'RECEIVE_TABLES';

export const receiveTables = tables => {
  return {
    type: RECEIVE_TABLES,
    tables,
  };
};

//thunk
export const fetchOpenTables = filters => dispatch => {
  return APIUtil.fetchOpenTables(filters)
    .then(tables => dispatch(receiveTables(tables)));
};
