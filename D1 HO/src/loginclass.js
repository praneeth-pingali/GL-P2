import React, { Component } from "react";
import WelcomeClass from "./welcomeclass";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Paul"
    };
  }

  render() {
    return (
      <div>
        <h2>Class Component: Login</h2>
        <p>Username: {this.state.username}</p>
        <WelcomeClass username={this.state.username} />
      </div>
    );
  }
}

export default LoginClass;
