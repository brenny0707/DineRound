import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  this.handleDropDown = this.handleDropDown.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = Object.assign({},{
      email_address: "demo@account.com",
      "password": "password"
    });
    // this.props.processForm(user);
    this.props.processForm(user)
      .then(res => {
        this.props.FetchUserProfile();
        this.props.closeModal();
      });
  }

  handleDropDown(e) {
    // e.preventDefault();
    const nextState = !this.state.open;
    this.setState({open: nextState});
  }

  handleLogout() {
    this.props.logout();
    this.handleDropDown();
  }

  render() {
    if (this.props.currentUser === null) {
      return (
        <div className="site-bar-greeting">
          <button className="site-bar-signup" onClick={() => this.props.openModal("signup")}>Sign Up</button>
          <button className="site-bar-login" onClick={() => this.props.openModal("login")}>Sign In</button>
          <button className="site-bar-demo-login" onClick={this.handleDemoLogin}>Demo</button>
        </div>
      );
    }
    else {
      return (
        <div className="site-bar-greeting">
          <p className="profile-dropdown-anchor"
            onClick={this.handleDropDown}>Hi, {this.props.currentUser.fname} <i className="fa fa-angle-down" aria-hidden="true"></i></p>
          <div className={this.state.open ? "session-button-background" : "dropdown-hidden"}
            onClick={this.handleDropDown}>
            <ul className={this.state.open ? "pullDown active " : "dropdown-hidden"} onClick={ (e) => e.stopPropagation() } >
              <li className="dropdown-li">
                <Link onClick={this.handleDropDown} className="dropdown-item" to={`/profile`}>My Profile</Link>
              </li>
              <li className="dropdown-li">
                <Link onClick={this.handleDropDown} className="dropdown-item" to={`/profile/favorites`}>Favorites</Link>
              </li>
              <li className="dropdown-li">
                <button className="site-bar-logout dropdown-item" onClick={this.handleLogout}>Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

//within your greeting render, if this.props.modalState is true, render < SessionFormContainer />, import it.

// <div className="site-bar-greeting">
//   <Link to={`/profile`}>Hi, {this.props.currentUser.fname}</Link>
//   <button className="site-bar-logout" onClick={this.props.logout}>Sign out</button>
// </div>
export default Greeting;
