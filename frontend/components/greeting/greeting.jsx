import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser === null) {
      return (
        <div className="site-bar-greeting">
          <button className="site-bar-signup" onClick={() => this.props.openModal("signup")}>Sign Up</button>
          <button className="site-bar-login" onClick={() => this.props.openModal("login")}>Sign In</button>
        </div>
      );
    }
    else {
      return (
        <div className="site-bar-greeting">
          <Link to={`/profile`}>Hi, {this.props.currentUser.fname}</Link>
          <button onClick={this.props.logout}>Sign out</button>
        </div>
      );
    }
  }
}

//within your greeting render, if this.props.modalState is true, render < SessionFormContainer />, import it.

export default Greeting;
