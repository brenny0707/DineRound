import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

class FeaturedRestaurantsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let queryName = this.props.location.search.slice(this.props.location.search.indexOf("=") + 1);
    this.props.searchRestaurants("ar");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      let queryName = nextProps.location.search.slice(nextProps.location.search.indexOf("=") + 1);
      nextProps.searchRestaurants("ar");
    }
  }

  render() {
    if(this.props.restaurants.keys === undefined) {
      return null;
    }
    else {
      let restaurants = this.props.restaurants;
      return(
        <div className="featured-restaurants-div">
          <div className="featured-restaurants">
            <h2>Featured Restaurants</h2>
            <ul className="featured-restaurants-list">
              {restaurants.map( restaurant => {
                return <li className="featured-restaurant-result" key={restaurant.id}>
                  <a href={`/#/restaurants/${restaurant.id}`}><img className="featured-restaurant-image" src={`${restaurant.image_url}`}></img></a>
                  <div>
                    <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                    <p>{restaurant.address}</p>
                  </div>

                </li>;
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurants: state.entities.searches.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (name) =>
      dispatch(searchRestaurants(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRestaurantsIndex);
