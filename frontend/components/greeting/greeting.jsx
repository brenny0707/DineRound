import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser === null) {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>Hi, {this.props.currentUser.fname}</p>
          <button onClick={this.props.logout}>Sign out</button>
        </div>
      );
    }
  }
}

export default Greeting;
