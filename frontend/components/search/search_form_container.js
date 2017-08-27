import React from 'react';
import { connect } from 'react-redux';
import { fetchOpenTables } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurantName: ownProps.restaurantName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchOpenTables: (filters) => dispatch(fetchOpenTables(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
