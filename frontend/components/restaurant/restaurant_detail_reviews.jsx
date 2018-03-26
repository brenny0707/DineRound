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
    const classes = this.props.restaurant.twitterHandle ? "restaurant-show-reviews restaurant-show-body-divs" :
    "restaurant-show-reviews-no-twitter restaurant-show-body-divs";
    let reviewKeys = this.props.restaurant.reviewIds;
    if (Object.keys(this.props.reviews) === 0) {
      return(
        <div className={classes}>
          <h3>{this.props.restaurant.name} Ratings and Reviews</h3>
        </div>
      );
    }
    return(
      <div className={classes}>
        <h3>{this.props.restaurant.name} Ratings and Reviews</h3>
        <ul className="review-list">
          {reviewKeys.map( (key) => {
            return <RestaurantDetailReviewItem
              key={key}
              review={this.props.reviews[key]} />;
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
