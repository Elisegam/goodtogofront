import React, { Component } from "react";
import axios from "axios";

export class RealMenuForm extends Component {
  state = {
    aliments: [],
    category: "adult"
  };
  handleChange = evt => {
    console.log(evt.target.name, evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, image, mainDish, price, category } = this.state;
    console.log(title, description);
    axios
      .post(process.env.REACT_APP_BACKEND_API + "/api/menu", {
        title,
        description,
        image,
        mainDish,
        price,
        category
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSelectBox = e => {
    const opt = e.target.options[e.target.selectedIndex];
    // console.log(opt.getAttribute("data"));
    const id = opt.getAttribute("data");
    this.setState({ mainDish: id });
  };
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_API + "/api/aliments", this.state)
      .then(res => {
        const filtered = res.data.filter(element => {
          return element.category === "burger" || element.category === "wrap";
        });
        this.setState({ aliments: filtered });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "auto"
        }}
      >
        <label>Title</label>
        <input
          onChange={this.handleChange}
          name="title"
          type="text"
          value={this.state.title}
        />
        <label>Image</label>
        <input
          onChange={this.handleChange}
          name="image"
          value={this.state.image}
        />
        <label>Main Dish</label>
        <select onChange={this.handleSelectBox} name="mainDish">
          {this.state.aliments.map((aliment, i) => (
            <option data={aliment._id} key={i}>
              {aliment.title}
            </option>
          ))}
        </select>
        <label>Price</label>
        <input
          onChange={this.handleChange}
          name="price"
          type="number"
          value={this.state.price}
        />
        <label>Description</label>
        <input
          onChange={this.handleChange}
          name="description"
          value={this.state.description}
        />
        <label>Category</label>
        <select onChange={this.handleChange} name="category">
          <option value="adult">Adult</option>
          <option value="kid">Kid</option>
        </select>
        <button>Create Menu</button>
      </form>
    );
  }
}

export default RealMenuForm;
