import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants, clearSearches } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

class SearchRestaurantsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearSearches();
    let queryName = this.props.location.search.slice(this.props.location.search.indexOf("=") + 1);
    this.props.searchRestaurants(queryName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      let queryName = nextProps.location.search.slice(nextProps.location.search.indexOf("=") + 1);
      nextProps.searchRestaurants(queryName);
    }
  }

  render() {
    if(this.props.restaurants.keys === undefined) {
      return (
        <h2>Loading...</h2>
      );
    }
    else {
      let restaurants = this.props.restaurants;
      return(
        <div className="search-restaurants-results-div">
          <div className="search-restaurants-results-content">
            <h2>Restaurants</h2>
            <ul className="search-restaurants-results">
              {restaurants.map( restaurant => {
                return <li className="search-restaurant-result" key={restaurant.id}>
                  <a href={`/#/restaurants/${restaurant.id}`}><img className="restaurant-results-restaurant-image" src={`${restaurant.image_url}`}></img></a>
                  <div>
                    <Link className="restaurant-li-name" to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
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
    clearSearches: () => dispatch(clearSearches()),
    searchRestaurants: (name) =>
      dispatch(searchRestaurants(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurantsIndex);
