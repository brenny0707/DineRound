import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserFavoriteItem extends React.Component {

  render() {
    let { favoriteId, restaurant } = this.props;
    return (
      <li className="user-favorite-li" key={favoriteId}>
        <div className="user-favorite-restaurant-icon"></div>
        <div className="user-favorite-details">
          <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
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
