import React from 'react';
import RestaurantMap from './restaurant_map';
import { withRouter } from 'react-router-dom';
class RestaurantDetail extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.restaurantId !== nextProps.match.params.restaurantId) {
      this.props.fetchRestaurant(nextProps.match.params.restaurantId);
    }
  }

  render() {
    if (this.props.id === null) {
      return null;
    }

    return (
      <div className="restaurant-show">
        <RestaurantMap address={this.props.address} />
        <div className="restaurant-show-header-content">
          <p>{this.props.name}</p>
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
