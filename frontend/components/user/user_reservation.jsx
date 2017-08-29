import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { deleteUserReservation } from '../../actions/profile_actions';

class UserReservation extends React.Component {

  constructor(props) {
    super(props);
    this.handleCancellation = this.handleCancellation.bind(this);
  }

  handleCancellation() {
    this.props.deleteUserReservation(this.props.reservationInfo.reservationId);
  }

  render() {
    let {reservationInfo} = this.props;
    let seatString = reservationInfo.seats === 1 ? `${reservationInfo.seats} person` : `${reservationInfo.seats} people`;
    let moment = require('moment');
    let parseTime = moment.utc(reservationInfo.time).format("LT");
    let parseDate = moment.utc(reservationInfo.date).format("LL");

    let pastReservation = new Date(reservationInfo.date).getTime() > new Date().getTime();
    let deleteReservationButton = pastReservation ?
      <button onClick={this.handleCancellation}>Delete Reservation</button>
    : <button>Write a Review!</button>;
    return (
      <li key={reservationInfo.id} className="user-reservation-item">
        <div className="user-reservation-restaurant-icon"></div>
        <div className="user-reservation-content">
          <Link to={`/restaurants/${reservationInfo.restaurantId}`} className="user-reservation-name">{reservationInfo.restaurantName}</Link>
          <p>{`Table for ${seatString}`}</p>
          <p>{`${parseDate} ${parseTime}`}</p>
        </div>
          {deleteReservationButton}
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reservationInfo: ownProps.reservation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserReservation: (id) => dispatch(deleteUserReservation(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserReservation));
