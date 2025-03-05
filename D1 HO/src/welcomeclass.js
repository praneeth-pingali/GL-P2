import React, { Component } from "react";

class WelcomeClass extends Component {
  render() {
    return (
      <div>
        <h2>Class Component: Welcome</h2>
        <p>Welcome, {this.props.username}!</p>
      </div>
    );
  }
}

export default WelcomeClass;
