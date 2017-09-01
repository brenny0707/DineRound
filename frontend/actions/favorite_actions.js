import * as APIUtil from '../util/favorite_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

//regular actions

export const receiveFavorite = (favorite) => {
  return {
    type: RECEIVE_FAVORITE,
    favorite,
  };
};

export const removeFavorite = (favorite) => {
  return {
    type: REMOVE_FAVORITE,
    favorite,
  };
};

//thunk actions
export const createFavorite = (restaurantId) => dispatch => {
  return APIUtil.createFavorite(restaurantId)
    .then(favorite => {
      dispatch(receiveFavorite(favorite));
    });
};

export const deleteFavorite = (restaurantId) => dispatch => {
  return APIUtil.deleteFavorite(restaurantId)
    .then(favorite => dispatch(removeFavorite(favorite)));
};
