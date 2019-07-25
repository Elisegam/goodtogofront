import React, { Component } from "react";
import axios from "axios";

export default class MenuForm extends Component {
  state = {
    title: "",
    image: "",
    price: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_API + "/api/aliments", this.state)
      .then(res => {
        this.setState({ title: "", image: "", price: 0 });
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  handleChange = e => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(process.env.REACT_APP_BACKEND_API);

    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <input
            name="price"
            value={this.state.price}
            type="number"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
