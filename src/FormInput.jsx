import React from "react";
import { Component } from "react";

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  dd = (event) => {
    event.preventDefault()
    // console.log("login");
    console.log(this.state.email)
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-4">Input Type Form:</h2>
          <form onSubmit={(event) => this.dd(event)}>
            <input
              type="email"
              onChange={(event) => this.setState({ email: event.target.value })}
              value={this.state.email}
              className="mx-2"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}

export default FormInput;
