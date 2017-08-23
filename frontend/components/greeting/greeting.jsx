import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser === null) {
      return (
        <div className="site-bar-greeting">
          <Link className="site-bar-signup" to="/signup">Sign Up</Link>
          <Link className="site-bar-login" to="/login">Sign In</Link>
        </div>
      );
    }
    else {
      return (
        <div className="site-bar-greeting">
          <p>Hi, {this.props.currentUser.fname}</p>
          <button onClick={this.props.logout}>Sign out</button>
        </div>
      );
    }
  }
}

export default Greeting;
