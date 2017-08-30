import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ReservationReviewItem extends React.Component {

  constructor(props) {
    super(props);

    this.colorStars = this.colorStars.bind(this);
  }

  colorStars(rating) {
    let numfilledStars = rating;
    let numblankStars = 5 - numfilledStars;
    let stars = [];
    for (numfilledStars; numfilledStars > 0; numfilledStars--) {
      stars.push(<span className="filled-star">&#9733;</span>);
    }
    for (numblankStars; numblankStars > 0; numblankStars--) {
      stars.push(<span className="empty-star">&#9733;</span>);
    }
    return stars;
  }

  render() {
    if (this.props.review === undefined && this.props.reservation === undefined) {
      return (
        <p>Loading...</p>
      );
    }
    else if (this.props.review === undefined) {
      debugger

      let pastReservation = new Date(this.props.reservation.date).getTime() > new Date().getTime();
      let reviewUrl = `/reservations/${this.props.reservation.reservationId}/review`;
      let reviewLink = !pastReservation ? <Link to={reviewUrl}>Write Review</Link> : null;
      return (
        <p>{reviewLink}</p>
      );
    }
    // debugger
    let moment = require('moment');
    let parseDate= moment.utc(this.props.review.updated_at).format("LL");

    let overallStars = this.colorStars(this.props.review.overallRating);
    let foodStars = this.colorStars(this.props.review.foodRating);
    let serviceStars = this.colorStars(this.props.review.serviceRating);
    let ambianceStars = this.colorStars(this.props.review.ambianceRating);
    let valueStars = this.colorStars(this.props.review.valueRating);
    // debugger
    return (
      <div className="reservation-review-div">
        <div className="reservation-review-content">
          <div className="reservation-review-header">
            <div className="reservation-review-header-overall-and-user">
              <p className="review-overall-rating">{overallStars} On {parseDate} you last wrote:</p>
            </div>
          </div>
          <p className="reservation-review-body">{this.props.review.body}</p>
        </div>
        <ul className="reservation-review-ratings">
          <li className="review-food-rating">FOOD {foodStars}</li>
          <li className="review-ambiance-rating">AMBIANCE {ambianceStars}</li>
          <li className="review-service-rating">SERVICE {serviceStars}</li>
          <li className="review-value-rating">VALUE {valueStars}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    review: state.entities.reviews[ownProps.reservation.reviewId],
  };
};

export default connect(mapStateToProps, null)(ReservationReviewItem);
