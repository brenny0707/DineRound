import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

class SearchRestaurantsIndex extends React.Component {

  constructor(props) {
    super(props);
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
        <div>
          <h2>Restaurants</h2>
          <ul className="search-restaurants-results">
            {restaurants.map( restaurant => {
              return <li key={restaurant.id}>
                <div className="restaurant-results-restaurant-icon"></div>
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                {restaurant.address}
              </li>;
            })}
          </ul>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchRestaurants: (name) =>
//       dispatch(searchRestaurants(name)),
//   };
// };

export default connect(mapStateToProps, null)(SearchRestaurantsIndex);
