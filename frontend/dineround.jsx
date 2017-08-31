import React from 'react';
import ReactDOM from 'react-dom';
//TESTING
import { deleteUserReservation } from './actions/profile_actions';
import {fetchReview} from './actions/review_actions';
//END TESTING
import Root from './components/root';


import configureStore from './store/store';
//TESTING!!!
window.fetchReview = fetchReview;
//END TESTING!!!

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
