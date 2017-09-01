import React from 'react';
import { connect } from 'react-redux';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

class RestaurantFavoriteButton extends React.Component {

  constructor(props) {
    super(props);

  this.state = {
    favoritedUserIds: this.props.favoritedUserIds,
  };

  }

  componentWillReceiveProps(nextProps) {
    if (this.state.favoritedUserIds !== nextProps.favoritedUserIds) {
      this.setState({favoritedUserIds: nextProps.favoritedUserIds});
    }
  }

  handleFavorite(action) {
    return (e) => {
      e.preventDefault();
      action === 'favorite' ?
        this.props.createFavorite(this.props.restaurantId) :
        this.props.deleteFavorite(this.props.restaurantId);
    };
  }

  render() {
    if (this.props.favoritedUserIds === undefined) {
      return (
        <button className="restaurant-header-favorite"><i className="fa fa-heart-o" aria-hidden="true"></i> Add to Favorites</button>
      )
    }
    else if (this.props.favoritedUserIds.includes(this.props.currentUserId)) {
      return(
        <button className="restaurant-header-favorite"
          onClick={this.handleFavorite("unfavorite")}><i className="fa fa-heart" aria-hidden="true"></i> Favorited</button>
      );
    }
    else {
      return(
        <button className="restaurant-header-favorite"
          onClick={this.handleFavorite("favorite")}><i className="fa fa-heart-o" aria-hidden="true"></i> Add to Favorites</button>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  if ( state.entities.restaurants[ownProps.restId]) {
    return {
      favoritedUserIds: state.entities.restaurants[ownProps.restId].favoritedUserIds,
      restaurantId: ownProps.restId,
      currentUserId: state.session.currentUser.id,
    };
  }
  else {
    return {
      favoritedUserIds: [],
      restaurantId: ownProps.restId,
      currentUserId: state.session.currentUser.id,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFavorite: (restaurantId) => dispatch(createFavorite(restaurantId)),
    deleteFavorite: (restaurantId) => dispatch(deleteFavorite(restaurantId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFavoriteButton);

  // <button className="restaurant-header-favorite">❤ Add to Favorites</button>
