import React from 'react';
import { connect } from 'react-redux';
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

export default connect(null, mapDispatchToProps)(SearchRestaurantsForm);
