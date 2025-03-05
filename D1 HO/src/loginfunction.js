import React from "react";
import WelcomeFunction from "./welcomefun";

function LoginFunction() {
  const username = "Paul"; 

  return (
    <div>
      <h2>Function Component: Login</h2>
      <p>Username: {username}</p>
      <WelcomeFunction username={username} />
    </div>
  );
}

export default LoginFunction;
