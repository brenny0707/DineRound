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
