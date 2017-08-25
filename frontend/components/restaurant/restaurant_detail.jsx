import React from 'react';
import RestaurantMap from './restaurant_map';
import RestaurantDetailInfo from './restaurant_detail_info';
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

    // const { hours, phoneNumber, websiteUrl } = this.props;
    // debugger
    return (
      <div className="restaurant-show">
        <div className="restaurant-show-header-content">
          <div className="restaurant-header-icon"></div>
          <h2 className="restaurant-header-name">{this.props.name}</h2>
          <button className="restaurant-header-favorite">❤ Add to Favorites</button>
        </div>
        <div className="restaurant-show-body">
          <div className="restaurant-show-reservations-search restaurant-show-body-divs">
            <h3>Make a reservation</h3>
          </div>
          <div className="restaurant-show-about-content restaurant-show-body-divs">
            <h3>About {this.props.name}</h3>
            <p>{this.props.about}</p>
            <RestaurantMap address={this.props.address} />
            <RestaurantDetailInfo info={this.props} />
          </div>
          <div className="restaurant-show-photos restaurant-show-body-divs">
            <h3>Restaurant Photos</h3>
          </div>
          <div className="restaurant-show-menu restaurant-show-body-divs">
            <h3>Menu</h3>
            <a href={this.props.websiteUrl}>View menu on restaurant's website</a>
          </div>
          <div className="restaurant-show-reviews restaurant-show-body-divs">
            <h3>{this.props.name} Ratings and Reviews</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;