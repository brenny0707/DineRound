import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReservation } from '../../actions/reservation_actions';

class SearchTablesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.userId,
      table_id: this.props.tableId,
      date: this.props.date,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const reservation = Object.assign({}, this.state);
    this.props.createReservation(reservation)
      .then((res) => this.props.history.push(`/profile`));
  }

  componentWillUnmount() {
    
  }

  render() {
    let moment = require('moment');
    let parseTime;
    parseTime= moment.utc(this.props.table.time).format("LT");
    return (
      <li className="search-tables-result">
        <button onClick={this.handleClick}>{parseTime}</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTablesIndexItem));

// let moment = require('moment');
// let parseTime;
// parseTime= moment.utc(table.time).format("LT");
// <li key={table.time}>
//   <button>{parseTime}</button>
// </li>;
