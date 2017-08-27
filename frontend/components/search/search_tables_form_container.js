import React from 'react';
import { connect } from 'react-redux';
import { searchOpenTables } from '../../actions/search_actions';
import SearchTablesForm from './search_tables_form';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurantName: ownProps.restaurantName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchOpenTables: (filters) => dispatch(searchOpenTables(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTablesForm);
