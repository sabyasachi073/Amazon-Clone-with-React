import React, { useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory(); // Its helps us to programmatically change the url
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault(); // This stops the refresh

    // Login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in, redirect to Home page...
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault(); // This stops the refresh

    // Register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Create a user with a email & password and logged in, redirect to Home page...

        if (auth) {
          history.push("/"); // Forcing to redirect to home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" onClick={signIn} className="login__signInButton">
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's{" "}
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
            target="_blank"
          >
            Conditions of Use
          </a>{" "}
          and{" "}
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
            target="_blank"
          >
            Privacy Notice.
          </a>
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
