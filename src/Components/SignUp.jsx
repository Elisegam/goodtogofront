import React, { Component } from "react";
import APIHandler from "../apiCalls/Handler";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    firstname: "foo",
    lastname: "bar",
    email: "foo@bar.baz",
    password: "1234"
  };

  // constructor() {
  //   super();
  //   this.avatarRef = React.createRef();
  // }

  // @todo => code this function to validate form according your needs
  checkAllFields() {
    return true;
  }

  // checkPasswordMatch() {
  //   const { password, passwordConfirm } = this.state;
  //   var passed = false;
  //   if (password && passwordConfirm) passed = password === passwordConfirm;
  //   else passed = true;
  //   return passed;
  // }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // if (!this.checkAllFields()) return console.warn("form incomplete");

    apiHandler
      .post("/auth/signup", this.state) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        console.log(this.props);
        this.props.redirect("/menu");
        console.log(serverRes);
      })
      .catch(serverErr => console.error(serverErr.response));
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { firstname, lastname, email, password } = this.state;
    return (
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1 className="title">Sign Up</h1>
        <label htmlFor="name">Firstname</label>
        <input
          name="firstname"
          id="firstname"
          type="text"
          defaultValue={firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          name="lastname"
          id="lastname"
          type="text"
          defaultValue={lastname}
        />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="text" defaultValue={email} />

        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          type="password"
          defaultValue={password}
        />

        <hr />
        <button className="btn">Register</button>
      </form>
    );
  }
}
