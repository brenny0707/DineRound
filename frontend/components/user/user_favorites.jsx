import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { FetchUserProfile } from '../../actions/profile_actions';
import UserFavoriteItem from './user_favorite_item';

class UserFavorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.FetchUserProfile();
  }

  render() {
    debugger
    const favoriteIds = this.props.profile.favoriteIds;
    const restaurants = this.props.restaurants;
    const favorites = this.props.favorites;
    let favRestaurantId;
    if(favoriteIds) {
      debugger
      return (
        <div className="user-favorites">
          <h2 className="user-favorites-header">Favorites</h2>
          <ul className="user-favorites-list">
            {favoriteIds.map(
              function(id) {
                debugger
                favRestaurantId = favorites[id].restaurantId;
              return (
                <UserFavoriteItem
                  key={id}
                  favoriteId={id}
                  restaurant={restaurants[favRestaurantId]} />
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className="user-favorites">
        <h2 className="user-favorites-header">Favorites</h2>
        <h2 className="user-favorites-header">You have no favorites</h2>
      </div>
    );
  }
}


const mapStateToProps = (state, OwnProps) => {
  return {
    profile: state.entities.profile,
    restaurants: state.entities.restaurants,
    favorites: state.entities.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchUserProfile: () => dispatch(FetchUserProfile()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserFavorites));
