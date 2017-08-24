import React from 'react';
import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const rest_id = ownProps.match.params.restaurantId;
  if (state.entities.restaurants[rest_id]) {
    const { id, name, address, tables } = state.entities.restaurants[rest_id];
    return {
      id,
      name,
      address,
      tables,
    };
  } else {
    return {
      id: null,
    };
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail));
