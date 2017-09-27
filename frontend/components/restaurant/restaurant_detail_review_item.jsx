import React from 'react';
import { connect } from 'react-redux';

class RestaurantDetailReviewItem extends React.Component {

  render() {
    if (this.props.review === undefined ){
      return null;
    }
    let moment = require('moment');
    let parseDate= moment.utc(this.props.review.created_at).format("LL");
    let numfilledStars = this.props.review.overallRating;
    let numblankStars = 5 - numfilledStars;
    let stars = [];
    for (numfilledStars; numfilledStars > 0; numfilledStars--) {
      stars.push(<span key={`fs${numfilledStars}`} className="filled-star">&#9733;</span>);
    }
    for (numblankStars; numblankStars > 0; numblankStars--) {
      stars.push(<span key={`bs${numblankStars}`} className="empty-star">&#9733;</span>);
    }
    return (
      <li className="restaurant-review-li">
        <div className="restaurant-review-content">
          <div className="restaurant-review-header">
            <div className="restaurant-review-header-overall-and-user">
              <p className="review-overall-rating">{stars} Written by {this.props.review.userFName} on {parseDate}</p>
            </div>
          </div>
          <p className="restaurant-review-body">{this.props.review.body}</p>
        </div>
        <ul className="restaurant-review-ratings">
          <li className="review-food-rating">FOOD {this.props.review.foodRating}</li>
          <li className="review-ambiance-rating">AMBIANCE {this.props.review.ambianceRating}</li>
          <li className="review-service-rating">SERVICE {this.props.review.serviceRating}</li>
          <li className="review-value-rating">VALUE {this.props.review.valueRating}</li>
        </ul>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    review: ownProps.review,
  };
};

export default connect(mapStateToProps, null)(RestaurantDetailReviewItem);
