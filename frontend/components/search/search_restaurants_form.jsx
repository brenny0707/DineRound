import React from 'react';
import Autosuggest from 'react-autosuggest';

const suggestions = [
 { name: "15 East Restaurant"},
 { name: "ABC Kitchen"},
 { name: "Babbo Ristorante"},
 { name: "Blue Hill"},
 { name: "Gotham Bar and Grill"},
 { name: "Gramercy Tavern"},
 { name: "Jean-Georges"},
 { name: "Juniper"},
 { name: "Le Bernardin"},
 { name: "Marea"},
 { name: "Marta"},
 { name: "Minetta Tavern"},
 { name: "Momofuku Ko"},
 { name: "Morimoto New York"},
 { name: "Per Se"},
 { name: "Saint George"},
 { name: "Scarpetta"},
 { name: "Shake Shack - Grand Central Terminal"},
 { name: "Smith & Wollensky - New York"},
 { name: "The NoMad"}];

const getSuggestions = value => {
  const input = value.trim().toLowerCase();
  const inputLength = value.length;

  return inputLength === 0 ? [] : suggestions.filter(suggestion => suggestion.name.toLowerCase().slice(0, inputLength) === input
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchRestaurantsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: "",
      suggestions: suggestions,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.restaurant_name;
    this.props.history.push(`/restaurants?name=${this.state.restaurant_name}`);
  }

  update(property) {
    return function(e) {
      this.setState({[property]: e.currentTarget.value});
    }.bind(this);
  }

  render() {
    return (
      <div className="search-restaurants-form-div">
        <h2>Search for Restaurants the easy way</h2>
        <form className="search-restaurants-form" onSubmit={this.handleSubmit}>
          <input className="search-restaurants-form-name"
            type="text"
            placeholder="Restaurant Name, eg: Marta"
            onChange={this.update('restaurant_name')}></input>
          <button>Search Restaurants</button>
        </form>
      </div>
    );
  }
}

export default SearchRestaurantsForm;
