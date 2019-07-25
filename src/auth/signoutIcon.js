import React from "react";
import { withRouter } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css";

function NavMain({ signout, history }) {
  const redirectMe = isLoggedin => {
    isLoggedin();
    history.push("/home");
  };

  return (
    <span
      className="is-clickable auth fas fa-sign-out-alt"
      onClick={() => signout(redirectMe)}
    />
  );
}

export default withRouter(NavMain);
