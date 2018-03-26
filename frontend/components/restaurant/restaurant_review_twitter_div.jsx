import React from 'react';
import RestaurantDetailReviews from './restaurant_detail_reviews';
import RestaurantTwitterTimeline from './restaurant_twitter_timeline';

const RestaurantReviewTwitterDiv = (props) => {
  const { restaurant } = props;
  return (
    <div className="restaurant-review-twitter-div">
      <RestaurantDetailReviews restaurant={restaurant} />
      <RestaurantTwitterTimeline twitterHandle={restaurant.twitterHandle} />
    </div>
  );
};


  export default RestaurantReviewTwitterDiv;
