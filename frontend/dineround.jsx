import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {fetchRestaurant, fetchRestaurants} from './util/restaurant_util'; //TESTING
import configureStore from './store/store';
//TESTING!!!
window.fetchRestaurant = fetchRestaurant;
window.fetchRestaurants = fetchRestaurants;
//END TESTING!!!
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser }};
    delete window.currentUser;
    store = configureStore(preloadedState);
  }
  else{
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);
});
