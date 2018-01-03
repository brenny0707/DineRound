import React from 'react';
import { connect } from 'react-redux';

const RestaurantDetailReviewItem = (props) => {
    if (props.review === undefined ){
      return null;
    }
    let moment = require('moment');
    let parseDate= moment.utc(props.review.created_at).format("LL");
    let numfilledStars = props.review.overallRating;
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
              <p className="review-overall-rating">{stars} Written by {props.review.userFName} on {parseDate}</p>
            </div>
          </div>
          <p className="restaurant-review-body">{props.review.body}</p>
        </div>
        <ul className="restaurant-review-ratings">
          <li className="review-food-rating">FOOD {props.review.foodRating}</li>
          <li className="review-ambiance-rating">AMBIANCE {props.review.ambianceRating}</li>
          <li className="review-service-rating">SERVICE {props.review.serviceRating}</li>
          <li className="review-value-rating">VALUE {props.review.valueRating}</li>
        </ul>
      </li>
    );
  };

const mapStateToProps = (state, ownProps) => {
  return {
    review: ownProps.review,
  };
};

export default connect(mapStateToProps, null)(RestaurantDetailReviewItem);
