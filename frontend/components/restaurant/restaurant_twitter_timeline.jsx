import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const RestaurantTwitterTimeline = (props) => {
  const { twitterHandle } = props;
  if ( !twitterHandle ) return null;

  return (
    <Timeline
     className="restaurant-show-body-divs"
     dataSource={{
       sourceType: 'profile',
       screenName: `${twitterHandle}`
     }}
     options={{
       height: '400'
     }}
   />
  );
};

export default RestaurantTwitterTimeline;
