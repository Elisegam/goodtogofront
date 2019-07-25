import React from "react";
import { Link } from "react-router-dom";
import FormSignin from "./../Components/SignIn";
import FormSignup from "../Components/SignUp";

export default function Auth(props) {
  const wantToSignIn = props.location.pathname === "/signin";

  var message = wantToSignIn
    ? "Don't you need to register"
    : "Already have an account";

  var path = wantToSignIn ? "/signup" : "/signin";

  function redirect(path, action) {
    props.history.push(path);
  }
  console.log(props, "from page auth");
  return (
    <React.Fragment>
      <p>
        <Link className="link" to={path}>
          {message} ?
        </Link>
      </p>
      {wantToSignIn ? (
        <FormSignin redirect={redirect} />
      ) : (
        <FormSignup redirect={redirect} />
      )}
    </React.Fragment>
  );
}
