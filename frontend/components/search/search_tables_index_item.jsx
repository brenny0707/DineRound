import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';

class SearchTablesIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        Hallo
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    date: ownProps.date,
    userId: ownProps.userId,
    tableId: ownProps.tableId,
  };
};
