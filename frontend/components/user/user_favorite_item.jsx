import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserFavoriteItem extends React.Component {

  render() {
    let { favoriteId, restaurant } = this.props;
    return (
      <li className="user-favorite-li" key={favoriteId}>
        <a href={`/#/restaurants/${restaurant.id}`}><img className="restaurant-results-restaurant-image" src={`${restaurant.image_url}`}></img></a>
        <div className="user-favorite-details">
          <Link className="restaurant-li-name" to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          <p>{restaurant.address}</p>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    favoriteId: ownProps.favoriteId,
    restaurant: ownProps.restaurant,
  };
};

export default connect(mapStateToProps, null)(UserFavoriteItem);
