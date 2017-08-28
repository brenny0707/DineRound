import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

class SearchRestaurantsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
        <h2>NOTHING RENDERED!</h2>
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
                  <div className="restaurant-results-restaurant-icon"></div>
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
    restaurants: state.entities.searches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (name) =>
      dispatch(searchRestaurants(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurantsIndex);
