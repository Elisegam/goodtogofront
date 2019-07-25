import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import burger from "../images/Burger_King.svg.png";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/NavMain.css";
import { NavLink } from "react-router-dom";
import { AuthConsumer } from "../auth/Guard";
import SignoutIcon from "../auth/signoutIcon";

function NavMain() {
  //   const myRef = React.createRef();

  //   function toggleCollapse() {
  //     myRef.current.classList.toggle("collapse");
  //   }

  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-image">
          <NavLink to="/home">
            <img
              className="logo-burger"
              src={burger}
              alt="gros logo de burger"
            />
          </NavLink>
        </div>
        <div className="left-logo">
          <h1>GoodToGO</h1>
          <p>"The Fastest way to get on the road"</p>
        </div>

        <div className="icones" style={{ textDecoration: "none" }}>
          <NavLink to="/menu">
            <div style={{ textDecoration: "none" }} className="ico">
              <i className="fas fa-hamburger fa-2x" />
              <p>Menu</p>
            </div>
          </NavLink>
          <NavLink to="/signin">
            <div className="ico">
              <i className="far fa-user fa-2x" />
              <p>Login</p>
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/signup">
            <div className="ico">
              <i className="fas fa-sign-in-alt fa-2x" />
              <p>Sign Up</p>
            </div>
          </NavLink>
          <AuthConsumer>
            {({ loginStatus, signout }) =>
              loginStatus === true ? (
                <React.Fragment>
                  {/* <NavLink
                    activeClassName="is-active"
                    className="icon auth fa fa-user-circle fa-lg"
                    to="/dashboard"
                  /> */}
                  <SignoutIcon signout={signout} />
                  <p>Log Out</p>
                </React.Fragment>
              ) : (
                <NavLink
                  activeClassName="is-active"
                  className="icon auth fas fa-sign-out-alt "
                  to="/signin"
                />
              )
            }
          </AuthConsumer>
        </div>
      </div>
    </div>
  );
}
export default NavMain;
