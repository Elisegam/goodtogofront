import React, { Component } from "react";
import Form from "../Components/form/MenuForm";
import RealMenuForm from "../Components/form/RealMenuForm";
export class AdminCreate extends Component {
  render() {
    return (
      <div>
        <h1>Create aliments</h1>
        <Form />
        <h2>Create menu</h2>
        <RealMenuForm />
      </div>
    );
  }
}

export default AdminCreate;
