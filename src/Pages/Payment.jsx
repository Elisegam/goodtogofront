import React, { Component } from "react";
import axios from "axios";

const apiHandler = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export class Payment extends Component {
  redirectToRecap = () => {
    this.props.history.push("/recap");
  };

  submitMenu = () => {
    console.log(this.props.currentMenus);
    apiHandler
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/users/payment",
        this.props.currentMenus
      )
      .then(res => {
        console.log(res);
        this.redirectToRecap();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    apiHandler
      .get("/auth/loggedin")
      .then()
      .catch(err => {
        this.props.history.push("/signin");
      });
  }

  render() {
    return (
      <div className="d-flex col cb-container">
        <h3>Pay</h3>
        <label>Name on Card</label>
        <input type="text" />
        <label>Card Number</label>
        <input type="text" />
        <label>Expiration Date</label>
        <input type="date" />
        <label>Security Code</label>
        <input type="text" />
        <button onClick={this.submitMenu} className="button">
          Validate
        </button>
      </div>
    );
  }
}

export default Payment;
