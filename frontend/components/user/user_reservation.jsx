import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { deleteUserReservation } from '../../actions/profile_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchReview } from '../../actions/review_actions';
import ReservationReviewForm from './reservation_review_form';
import ReservationReviewItem from './reservation_review_item';

class UserReservation extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancellation = this.handleCancellation.bind(this);
  }

  componentDidMount() {

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
    : null;

    debugger
    return (
      <li key={reservationInfo.reservationId} className="user-reservation-item">
      <a href={`/#/restaurants/${reservationInfo.restaurantId}`}><img className="restaurant-results-restaurant-image" src={`${reservationInfo.restaurantImageUrl}`}></img></a>
        <div className="user-reservation-content">
          <div className="user-reservation-details">
            <Link to={`/restaurants/${reservationInfo.restaurantId}`} className="restaurant-li-name">{reservationInfo.restaurantName}</Link>
            <p>{`Table for ${seatString}`}</p>
            <p>{`${parseDate} ${parseTime}`}</p>
          </div>
          <ReservationReviewItem reservation={reservationInfo}/>
        </div>
          {deleteReservationButton}
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.reservation.reviewId;
  return {
    reservationInfo: ownProps.reservation,
    review: state.entities.reviews[reviewId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserReservation: (id) => dispatch(deleteUserReservation(id)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchReview: (id) => dispatch(fetchReview(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserReservation));
