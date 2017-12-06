import React from 'react';

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

class SearchRestaurantsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: "",
      suggestions: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.chooseSuggestion = this.chooseSuggestion.bind(this);
    this.navigateSuggestion = this.navigateSuggestion.bind(this);
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.restaurant_name;
    this.props.history.push(`/restaurants?name=${this.state.restaurant_name}`);
  }

  update(property) {
    return function(e) {
      this.setState({
        property: e.currentTarget.value,
        suggestions: getSuggestions(e.currentTarget.value)
      });
    }.bind(this);
  }

  navigateSuggestion() {
    if(this.state["suggestions"].length === 0) {
      return;
    }
    else {
      let selected = $(".search-restaurant-suggestion.hovered-suggestion");
    }
  }

  onHover(e) {
    e.preventDefault();
    console.log(e.currentTarget);
    $(e.currentTarget).addClass("hovered-suggestion");
  }

  offHover(e) {
    e.preventDefault();
    $(e.currentTarget).removeClass("hovered-suggestion");
  }

  chooseSuggestion(e) {
    e.preventDefault();
    console.log(e.currentTarget.innerHTML);
    console.log($(".search-restaurants-form-name"));
    this.setState({
      restaurant_name: e.currentTarget.innerHTML,
      suggestions: []
      });
    $(".search-restaurants-form-name").val(`${e.currentTarget.innerHTML}`);
  }

  render() {
    return (
      <div className="search-restaurants-form-div"
        onKeyDown={this.navigateSuggestion}>
        <h2>Search for Restaurants the easy way</h2>
        <form className="search-restaurants-form" onSubmit={this.handleSubmit}>
          <input className="search-restaurants-form-name"
            type="text"
            placeholder="Restaurant Name, eg: Marta"
            onChange={this.update('restaurant_name')}></input>
          <button>Search Restaurants</button>
        </form>
        { this.state.suggestions.length > 0 &&
          <ul className="search-restaurants-suggestions">
            { this.state.suggestions.map( (suggestion, idx) => {
              return (
                <li key={idx}
                  className="search-restaurants-suggestion"
                  onClick={this.chooseSuggestion}
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.offHover}>
                  {suggestion.name}
                </li>
              );
            })
          }
          </ul>
        }
      </div>
    );
  }
}

export default SearchRestaurantsForm;
