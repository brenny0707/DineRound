import React from 'react';
import ReactDOM from 'react-dom';
//TESTING
import { createFavorite, deleteFavorite } from './actions/favorite_actions';
//END TESTING
import Root from './components/root';


import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser }};
    delete window.currentUser;
    store = configureStore(preloadedState);
    window.dispatch = store.dispatch;
    window.getState = store.getState;
  }
  else{
    store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
  }
  ReactDOM.render(<Root store={store}/>, root);
});
