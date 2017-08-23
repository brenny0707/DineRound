import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions'; //TESTING
import configureStore from './store/store';
//TESTING!!!

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
