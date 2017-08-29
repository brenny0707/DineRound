import React from 'react';
import {connect} from 'react-redux';

class UserReservation extends React.Component {

  render() {
    let {reservationInfo} = this.props;
    // debugger
    let seatString = reservationInfo.seats === 1 ? `${reservationInfo.seats} person` : `${reservationInfo.seats} people`;
    let moment = require('moment');
    let parseTime = moment.utc(reservationInfo.time).format("LT");
    let parseDate = moment.utc(reservationInfo.date).format("LL");
    return (
      <li key={reservationInfo.id}>
        <div className="user-reservation-content">
          <h3>{reservationInfo.restaurantName}</h3>
          <p>{`Table for ${seatString}`}</p>
          <p>{`${parseDate} ${parseTime}`}</p>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reservationInfo: ownProps.reservation
  };
};

export default connect(mapStateToProps, null)(UserReservation);
