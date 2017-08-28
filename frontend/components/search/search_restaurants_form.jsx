import React from 'react';

class SearchRestaurantsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.restaurant_name;
    this.props.searchRestaurants(name)
      .then(this.props.history.push(`/restaurants/`));
  }

  update(property) {
    return function(e) {
      this.setState({[property]: e.currentTarget.value});
    }.bind(this);
  }

  render() {
    return (
      <form className="search-restaurants-form" onSubmit={this.handleSubmit}>
        <input className="search-restaurants-form-name"
          type="text"
          placeholder="Restaurant Name, eg: Marta"
          onChange={this.update('restaurant_name')}></input>
        <button>Search Restaurants</button>
      </form>
    );
  }
}

export default SearchRestaurantsForm;
