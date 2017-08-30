import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import RestaurantDetailReviewItem from './restaurant_detail_review_item';

class RestaurantDetailReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.restaurant.id);
  }

  render() {
    if (this.props.reviews[0] === undefined) {
      return null;
    }
    return(
      <div className="restaurant-show-reviews restaurant-show-body-divs">
        <h3>{this.props.restaurant.name} Ratings and Reviews</h3>
        <ul className="review-list">
          {this.props.reviews.map( (review) => {
            return <RestaurantDetailReviewItem
              key={review.id}
              review={review} />;
          })}
        </ul>

      </div>
    );
  }

}



const mapStateToProps = (state, ownProps) => {
  return {
    restaurantId: ownProps.restaurantId,
    reviews: state.entities.reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailReviews);
