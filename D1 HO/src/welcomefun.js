import React from "react";

function WelcomeFunction(props) {
  return (
    <div>
      <h2>Function Component: Welcome</h2>
      <p>Welcome, {props.username}!</p>
    </div>
  );
}

export default WelcomeFunction;
