import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRestaurants } from '../../actions/search_actions';
import SearchRestaurantsForm from './search_restaurants_form';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     restaurants: state.entities.searches
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (name) => dispatch(searchRestaurants(name)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchRestaurantsForm));
