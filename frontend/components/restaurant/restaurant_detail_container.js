import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  const rest_id = ownProps.match.params.restaurantId;
  if (state.entities.restaurants[rest_id]) {
    const { id, name, address, tables, about, hours, phone_number, website_url } = state.entities.restaurants[rest_id];
    return {
      id,
      name,
      address,
      tables,
      about,
      hours,
      phoneNumber: phone_number,
      websiteUrl: website_url,
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
