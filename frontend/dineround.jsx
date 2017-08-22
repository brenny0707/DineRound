import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util.js'; //TESTING
import configureStore from './store/store';
//TESTING!!!
window.signup = signup;
window.login = login;
window.logout = logout;
//END TESTING!!!
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to DineRound!</h1>, root);
});
