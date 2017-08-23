import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: "",
      fname: "",
      lname: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(res => this.props.closeModal());
  }

  update(property) {
    return (e) => {
      return this.setState({ [property]: e.target.value});
    };
  }

  renderErrors() {
    if (this.props.errors === undefined) {
      return null;
    }
    return(
      <ul className="session-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const inSignUp = this.props.formType === "signup";
    const formHeader = inSignUp ?
    "Welcome to DineRound!" : "Please Sign In";
    const buttonName = inSignUp ? "Create Account" : "Sign In";

    const signUpFName = inSignUp ?
      <input type="text"
      placeholder="First Name"
      value={this.state.fname}
      onChange={this.update('fname')}/> : null;

    const signUpLName = inSignUp ?
      <input type="text"
      placeholder="Last Name"
      value={this.state.lname}
      onChange={this.update('lname')}/> : null;
    return (
      <div className="div-session-form">
        <form className="session-form" onClick={ (e) => e.stopPropagation()} onSubmit={this.handleSubmit}>
          <h3>{formHeader}</h3>
          {this.renderErrors()}
          {signUpFName}
          {signUpLName}
          <input type="text"
            placeholder="Email Address"
            value={this.state.email_address}
            onChange={this.update('email_address')}/>
          <input type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}/>
          <button>{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
