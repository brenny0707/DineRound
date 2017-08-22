import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util.js'; //TESTING

//TESTING!!!
window.signup = signup;
window.login = login;
window.logout = logout;
//END TESTING!!!
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to DineRound!</h1>, root);
});
