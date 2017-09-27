import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { FetchUserProfile } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  const rest_id = ownProps.match.params.restaurantId;
  if (state.entities.restaurants[rest_id]) {
    const { id, name, address, tables, about, hours, phone_number, website_url, image_url, reviewIds } = state.entities.restaurants[rest_id];
    return {
      id,
      name,
      address,
      tables,
      about,
      hours,
      phoneNumber: phone_number,
      websiteUrl: website_url,
      imageUrl: image_url,
      reviewIds,
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
    FetchUserProfile: () => dispatch(FetchUserProfile()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail));
