import React, { Component } from "react";
import { AuthConsumer } from "../auth/Guard";

export default class Signin extends Component {
  state = {
    email: "foo@bar.baz",
    password: "1234"
  };

  handleSubmit = (evt, signin) => {
    // the handleSubmit method here receives 2 params
    // 1 - the classic event object
    // 2 - the signin function, passed by the AuthConsumer
    console.log("woot?");
    evt.preventDefault();
    signin(status => {
      console.log("here", status);
      // this callback is executed inside the Provider !!!
      // console.log(this.props);
      this.props.redirect("/menu");
    }, this.state);
  };

  checkAllFieldsFilled() {}

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    console.log("je suis passé par la signin");
    console.log(this.props, "props from signin");
    return (
      <AuthConsumer>
        {props => (
          <form
            className="form"
            onSubmit={evt => handleSubmit(evt, props.signin)}
            onChange={handleChange}
          >
            <h1 className="title">Login</h1>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" defaultValue={email} />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              defaultValue={password}
            />
            <hr />
            <button className="btn">ok</button>
          </form>
        )}
      </AuthConsumer>
    );
  }
}
